import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import { secretKey } from '../../configs/jwt.configs';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { UserType } from '../../types/Type';

class UserService {
  getUser = async (req: Request, res: Response) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Get users failed', err });
    }
  };
  getUserId = async (id: number, res: Response) => {
    try {
      const users = await User.findAll({
        where: {
          id: id,
        },
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ message: 'Get users failed', err });
    }
  };

  createUser = async (data: any, res: Response) => {
    const { email, password, firstName, lastName, birthday, role, status } = data;
    try {
      const emailCheck = await User.findOne({ where: { email } });

      if (emailCheck) {
        return res.status(400).json({ message: 'Email already exists' });
      }
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await User.create({ ...data, password: hashedPassword });

      res.status(200).json({ message: 'Create User Successfully', user });
    } catch (err) {
      console.error('Error handling register', err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  loginUser = async (data: any, res: Response) => {
    // get username vs password ở body
    const { email, password } = data;
    try {
      // Kiểm tra username và trả về toàn bộ data
      const user = await User.findOne({ where: { email } });

      if (user) {
        const myPass = await bcrypt.compare(password, user.dataValues.password);

        if (myPass) {
          const accessToken = jwt.sign(user.dataValues, secretKey);
          res.status(200).json({
            user: user,
            accessToken,
          });
        } else {
          res.status(401).json({ message: 'Password was wrong' });
        }
      } else {
        // Nếu sai thì báo lỗi
        res.status(401).json({ message: 'Email or password does not exist !' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Not found' });
    }
  };

  updateUser = async (data: any, id: number, res: Response) => {
    try {
      const userUpdate = await User.update(data, {
        where: { id: id },
      });
      res.status(200).json({ message: 'Updated user successfully', userUpdate });
    } catch (error) {
      res.status(404).json({ message: 'Update user  error' });
    }
  };

  updateStatusByAdmin = async (id: number, res: Response) => {
    try {
      const currentUser = (await User.findOne({ where: { id } })) as UserType | null;
      if (currentUser) {
        const newStatus = currentUser.status === 1 ? 2 : 1;
        const userUpdate = await User.update(
          { status: newStatus },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json({ message: 'Update successfully', userUpdate });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: ' Update Error' });
    }
  };

  updateRoleByAdmin = async (id: number, res: Response) => {
    try {
      const currentUser = (await User.findOne({ where: { id } })) as UserType | null;
      if (currentUser) {
        const newRole = currentUser.role === 1 ? 2 : 1;
        const userUpdate = await User.update(
          { role: newRole },
          {
            where: {
              id: id,
            },
          }
        );
        res.status(200).json({ message: 'Update successfully', userUpdate });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: ' Update Error' });
    }
  };
}

export default new UserService();
