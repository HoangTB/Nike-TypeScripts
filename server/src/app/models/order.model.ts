import DataTypes from 'sequelize';
import sequelize from '../../libraries/database/db.connect';
import User from '../models/user.model';
const Order = sequelize.define(
  'Orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'Orders',
    timestamps: false,
  }
);
User.hasOne(Order, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.sync()
  .then(() => {
    console.log('Create Order successfully');
  })
  .catch((error) => {
    console.error('Error create Orders:', error);
  });

export default Order;
