import React, { useState } from "react";
import "./App.css";
import SecondaryCheckbox from "./Components/CheckBox/SecondaryCheckbox";
import UseReducer from "./Components/hooks/UseReducer/UseReducer";
import SideBar from "./Components/Sidebar";
import TodoApp from "./Components/Todo";
import UseContextHook from "./Components/hooks/UseContextUse";
import UseRefUse from "./Components/hooks/UseRefUse";
import SearchBox from "./Components/SearchBox";
import { AutoSuggestt } from "./Components/AutoSuggestion";
import ReactTableEx from "./Components/ReactTableEx";

function App() {
  const [state,setState] = useState({
    checkbox:false,
    useRedHook:false,
    todoOpen:false,
    useCon:false,
    useRef:false,
    searchBox: false,
    autoSuggest:false,
    table:false,
  })

  return (
    <div className="App">
      <SideBar
        state={state}
        setState={setState}

      />
   
      {/* <button onClick={()=> setState((p) => console.log(p))}>chagne</button> */}
      <main>
        {state.checkbox && <SecondaryCheckbox/>}
        {state.useRedHook && <UseReducer />}
        {state.todoOpen && <TodoApp />}
        {state.useCon && <UseContextHook />}
        {state.useRef && <UseRefUse />}
        {state.searchBox && <SearchBox />}
        {state.autoSuggest && <AutoSuggestt />}
        {state.table && <ReactTableEx />}
      </main>
    </div>
  );
}

export default App;
