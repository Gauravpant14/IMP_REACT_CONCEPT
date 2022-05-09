import React from "react";
import { Routes, Route, Navigate } from "react-router";
import LifeCycleA from "./ClassComponents/LifeCycleA";
import ParentComp from "./ClassComponents/PureComEx/ParentComp";
import AllForms from "./Components/Forms";
import BasicForm from "./Components/Forms/BasicForm";
import NavBar from "./Components/NavBar/NavBar";
import ErrBoundary from "./ErrBoundaryExample/ErrBoundary";
import ErrorBoundary from "./ErrBoundaryExample/ErrorBoundary";
import ClickCounter from "./HigherOrderComponent/ClickCounter";
import HoverCounter from "./HigherOrderComponent/HoverCounter";
import Layout from "./Layout/Layout";
import Dashboard from "./Page/Dashboard";
import InterviewPrep from "./Page/InterviewPrep";
import Login from "./Page/Login/Login";
import Registration from "./Page/Registration/Index";
import SagaProfile from "./Page/SagaProfile";
import PhotoSagaEx from "./Page/SagaProfile/PhotoSagaEx";
import PortalDemo from "./PortalDemo/PortalDemo";
const renderRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="setting" element={<Login />} />
      </Route>
      <Route path="/registration" element={<Registration />} />
      <Route path="/signin" element={<Navigate to="/" />} />
      <Route path="/signup" element={<Navigate replace to="/registration" />} />
      <Route path="/saga" element={<SagaProfile />} />
      <Route path="/psaga" element={<PhotoSagaEx />} />
      <Route path="/interview" element={<InterviewPrep />} />
      <Route path="/form-related" element={<AllForms />} />

      {/*{<Navigate replace to="/registration" /> will truly replace the path , not at the top of another existing route */}
    </Routes>
  );
};
function App() {
  return (
    <div>
      {/* <Layout> */}
      {/* <NavBar /> */}
      {/* <Dashboard /> */}
      {/* <LifeCycleA /> */}
      {/* <ParentComp /> */}
      {/* <PortalDemo /> */}

      {/* <ErrorBoundary>
        <ErrBoundary heroName="joker" />
      </ErrorBoundary> */}


      {/* <---- Higher order funtion example starts ----> */}
      <ClickCounter name="Passing down data"/>
      <HoverCounter name="Passing in hover component"/>
      {/* <---- Higher order funtion example end ----> */}

      {/* {renderRoutes()} */}

      {/* </Layout> */}
    </div>
  );
}

export default App;
