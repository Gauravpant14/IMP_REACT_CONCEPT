import React, { useState } from "react";
import "./App.css";
import SecondaryCheckbox from "./Components/CheckBox/SecondaryCheckbox";
import UseReducer from "./Components/hooks/UseReducer";
import SideBar from "./Components/Sidebar";
import TodoApp from "./Components/Todo";

function App() {
  const [checkbox, setChecbox] = useState(false);
  const [useRedHook, setUseRedHook] = useState(false);
  const [todoOpen, setTodo] = useState(false);

  return (
    <div className="App">
      <SideBar setChecbox={setChecbox} setUseRedHook={setUseRedHook} setTodo={setTodo}/>
      {checkbox && <SecondaryCheckbox active={checkbox}/>}
      {useRedHook && <UseReducer />}
      {todoOpen && <TodoApp/>}
    </div>
  );
}

export default App;
