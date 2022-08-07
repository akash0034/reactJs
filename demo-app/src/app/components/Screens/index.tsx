import React from "react";
import Header from "../Header";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import { useSelector } from "react-redux";

const Screens = () => {

  //userSession state 
  const isLoggedIn = useSelector((state: any) => {
    return state.isLoggedIn;
  });

  //All routes are defined here.
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />

        <Routes>
          {!isLoggedIn && <Route path="/sign-in" element={<Login />} />}
          {isLoggedIn && <Route path="dashboard" element={<Dashboard />} />}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Screens;
