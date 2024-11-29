import React from "react";
import LeftContent from "../LeftContent/LeftContent";
import LoginContent from "../LoginContent/Login";
import Register from "../Registered/Registered";
const Dashboard = () => {
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  const handleChangeToRegister = () => {
    setIsLoginPage(false);
  };
  const handleChangeToLogin = () => {
    console.log("Change to login");
    setIsLoginPage(true);
  };
  return (
    <div className="content">
      <div className="container">
        <div className="left-wrapper">
          <LeftContent />
        </div>
        <div className="right-wrapper">
          {isLoginPage ? (
            <LoginContent handleChangeToRegister={handleChangeToRegister} />
          ) : (
            <Register handleChangeToLogin={handleChangeToLogin} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
