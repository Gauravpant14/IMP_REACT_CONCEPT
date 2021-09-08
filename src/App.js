import React, { useState } from "react";
import "./App.css";
import SecondaryCheckbox from "./Components/CheckBox/SecondaryCheckbox";
import UseReducer from "./Components/hooks/UseReducer";
import SideBar from "./Components/Sidebar";

function App() {
  const [checkbox, setChecbox] = useState(false);
  const [useRedHook, setUseRedHook] = useState(false);
  return (
    <div className="App">
      <SideBar setChecbox={setChecbox} setUseRedHook={setUseRedHook} />
      {checkbox && <SecondaryCheckbox active={checkbox}/>}
      {useRedHook && <UseReducer />}
    </div>
  );
}

export default App;
