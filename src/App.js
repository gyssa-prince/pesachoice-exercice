import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Dashboard from "./components/dashboard/dashboard";
import Register from "./components/register/register";
import ProtectedRoute from "./components/protected";
import { UserAuthContextProvider } from "./context/userContex";
function App() {
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
export default App;
