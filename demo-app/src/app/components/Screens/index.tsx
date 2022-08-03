import React from "react";
import Header from "../Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import { Row, Col, Container } from "react-bootstrap";
import Dashboard from "./Dashboard";
import Home from "./Home";

const Screens = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/sign-in" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Screens;
