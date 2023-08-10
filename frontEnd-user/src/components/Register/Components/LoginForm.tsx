import React from "react";
import "./style.css";
import { LoginRegisterFormProps } from "../../../types/Types";
const LoginForm: React.FC<LoginRegisterFormProps> = ({ setIsShow }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center form-login form-login">
      {/* <ToastContainer />
      {isLoading && <Loading />} */}
      <div className="nike-unite-swoosh register-panel-form">
        <img
          src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
          alt="nike"
        />
      </div>
      <div className="header-text">
        <span>
          FOR EVERYTHING ABOUT NIKE <br /> YOUR ACCOUNT
        </span>
      </div>
      <form>
        <div className="login-panel-form">
          <input
            placeholder="Email address"
            type="text"
            className="form-control mt-3 w-100"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          {/* {errors.email && <p className="error">{errors.email}</p>} */}
          <input
            placeholder="Password"
            type="password"
            className="form-control mt-3 w-100"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
          <span className="login-panel-desc mb-3 mt-3">
            By signing in, you agree to Nike's{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Privacy Policy
            </a>
            {" and "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=en&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Terms of Use
            </a>
            .
          </span>
          <button className="login-panel-button" type="submit">
            SIGN IN
          </button>
          <span className="text-center mt-4">
            Not a member?{" "}
            <span
              className="underline cursor-pointer text-logres"
              onClick={() => setIsShow(false)}
            >
              Join us.
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
