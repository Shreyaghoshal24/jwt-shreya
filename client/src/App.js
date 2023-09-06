import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import './App.css';

function App() {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar className="app-toolbar">
          <Typography variant="h2">
             AUTHENTICATION FORM
          </Typography>
          <div className="nav-links">
            <Typography variant="h5">
              <a href="/login">Login</a>
            </Typography>
            <Typography variant="h5">
              <a href="/">Sign Up</a>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <CssBaseline />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;