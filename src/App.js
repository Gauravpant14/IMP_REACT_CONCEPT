import React from "react";
import { Routes, Route, Navigate } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Index";
function App() {
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="setting" element={<Login />} />
        </Route>
        <Route path="/registration" element={<Registration />} />
        <Route path="/signin" element={<Navigate to="/" />} />
        <Route
          path="/signup"
          element={<Navigate replace to="/registration" />}
        />
        {/*{<Navigate replace to="/registration" /> will truly replace the path , not at the top of another existing route */}
      </Routes>
    </div>
  );
}

export default App;
