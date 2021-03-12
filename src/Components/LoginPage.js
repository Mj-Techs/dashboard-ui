import React from "react";
import { Link } from "react-router-dom";
const LoginPage = ({ handleChangeStatus }) => {
  return (
    <div className="login_container">
      <div className="login_form">
        <div className="login_header">Login here</div>
        <div className="form">
          <form onSubmit={() => handleChangeStatus()}>
            <div className="form_child">
              <label>Username</label>
              <input type="text" />
            </div>
            <div className="form_child">
              <label>Password</label>
              <input type="password" />
            </div>
            <div className="form_lastchild">
              <button type="submit">Login</button>
              <Link className="link">I forgot my password</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="extra_thing">
        <div className="first_child">
          Create a new account <Link className="link2">here.</Link>
        </div>
        <div className="second_child">
          If you need any other help,please contact the helpdesk
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
