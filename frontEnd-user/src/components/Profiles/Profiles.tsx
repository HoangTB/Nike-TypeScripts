import React, { useState, useEffect } from "react";
import "./Profiles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { IProfile } from "../../types/Types";
import { UserAPI } from "../../models/LoginRegister";

const Profiles: React.FC = () => {
  const [userData, setUserData] = useState<IProfile>();
  const location = useLocation();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");

  const fetchUserData = async (userId: number) => {
    try {
      const response = await UserAPI.getUserId(userId);
      setUserData(response.data[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const userValue = localStorage.getItem("user");
    const user = userValue ? JSON.parse(userValue) : undefined;
    if (user) {
      fetchUserData(user.id);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (userData?.firstName && userData.lastName && userData.birthday) {
      setFirstName(userData!.firstName);
      setLastName(userData!.lastName);
      setBirthday(userData!.birthday);
    }
  }, [userData]);

  const handleUpdate = async (id: number) => {
    const data: IProfile | undefined = {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
    };
    await UserAPI.updateUser(id, data as any)
      .then(() => {
        toast.success("Update Users Successfully !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error: any) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-4 ">
      <ToastContainer />
      <div className="container form-profile">
        <h1 className="mb-5">Account Settings</h1>
        <div className="bg-white rounded-lg d-block d-sm-flex">
          <div className="profile-tab-nav border-right">
            <div className="p-4">
              <div className="img-circle text-center mb-3">
                <img
                  src="/avatar.png"
                  alt="..."
                  className="shadow avatar-file"
                />
              </div>
              <h4 className="text-center">
                {userData?.lastName} {userData?.firstName}
              </h4>
            </div>
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {" "}
            </div>
          </div>
          <div className="tab-content p-4 p-md-5" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h3 className="mb-4">Account Settings</h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      value={userData?.email}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      value={birthday ? birthday?.slice(0, 10) : ""}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-light"
                  onClick={() => userData?.id && handleUpdate(userData.id)}
                >
                  Update
                </button>{" "}
                <button className="btn btn-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
