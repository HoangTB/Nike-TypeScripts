import React from "react";
import "./UserManager.css";
const UserManager: React.FC = () => {
  return (
    <div className="content-user">
      <div className="table-content">
        <div className="wrapper-title">
          <i className="fa-solid fa-arrow-right"></i>
          <h1 className="title-page">USER-MANAGER</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID USER</th>
              <th>ROLE</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>EMAIL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {/* {users &&
              users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {user.role === 1 ? (
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => handleAdmin(user.id)}
                        >
                          User
                        </button>
                      ) : user.role === 2 ? (
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => handleAdmin(user.id)}
                        >
                          Admin
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.status === 1 ? (
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => handleBlockActive(user.id)}
                        >
                          Active
                        </button>
                      ) : user.status === 2 ? (
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleBlockActive(user.id)}
                        >
                          Block
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManager;
