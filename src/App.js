import React from "react";
import { Routes, Route, Navigate } from "react-router";
import NavBar from "./Components/NavBar/NavBar";
import Layout from "./Layout/Layout";
import Dashboard from "./Page/Dashboard";
import InterviewPrep from "./Page/InterviewPrep";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Index";
import SagaProfile from "./Page/SagaProfile";
import PhotoSagaEx from "./Page/SagaProfile/PhotoSagaEx";
function App() {
  return (
    <div>
      {/* <Layout> */}
        <NavBar />
        {/* <Dashboard /> */}
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
          <Route path="/saga" element={<SagaProfile />} />
          <Route path="/psaga" element={<PhotoSagaEx />} />
          <Route path="/interview" element={<InterviewPrep />} />
          {/*{<Navigate replace to="/registration" /> will truly replace the path , not at the top of another existing route */}
        </Routes>
      {/* </Layout> */}
    </div>
  );
}

export default App;
