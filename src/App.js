import "./App.css";
import React from "react";
import "./components/LeftContent/Left.css";
import "./components/Registered/Registered.css";
import "./components/LoginContent/Login.css";
import Users from "./components/Users";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Col, Row } from "antd";
import NotFounds from "./components/NotFounds";
function App() {
  return (
    <Row>
      {/* <Col xs={4}>
        <SideBar />
      </Col> */}
      <Col xs={20}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<NotFounds />} />
        </Routes>
      </Col>
    </Row>
  );
}
export default App;
