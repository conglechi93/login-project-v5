import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LeftContent from "./components/LeftContent/LeftContent";
import "./components/LeftContent/Left.css";
import Register from "./components/Registered/Registered";
import "./components/Registered/Registered.css";
import LoginContent from "./components/LoginContent/Login";
import "./components/LoginContent/Login.css";
function App() {
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
}

export default App;
