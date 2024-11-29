import logo from "./logo.svg";
import "./App.css";
import React from "react";
import LeftContent from "./components/LeftContent/LeftContent";
import "./components/LeftContent/Left.css";
import Register from "./components/Registered/Registered";
import "./components/Registered/Registered.css";
import LoginContent from "./components/LoginContent/Login";
import "./components/LoginContent/Login.css";
import Users from "./components/Users";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Col, Row } from "antd";
import NotFounds from "./components/NotFounds";

function App() {
  return (
    <Row>
      <Col xs={4}>
        <Sidebar />
      </Col>
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
