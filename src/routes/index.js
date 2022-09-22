import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../components/home/home";
import Login from "../components/login/login";
import Dashboard from "../components/dashboard/dashboard";
import Register from "../components/register/register";
import ProtectedRoute from "./protected";
import { UserAuthContextProvider } from "../context/userContex";
function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}
export default AllRoutes;
