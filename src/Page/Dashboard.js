import React from "react";
import { useState } from "react/cjs/react.development";
import { AutoSuggestt } from "../Components/AutoSuggestion";
import SecondaryCheckbox from "../Components/CheckBox/SecondaryCheckbox";
import HomePage from "../Components/Homepage";
import UseContextHook from "../Components/hooks/UseContextUse";
import UseReducer from "../Components/hooks/UseReducer/UseReducer";
import UseRefUse from "../Components/hooks/UseRefUse";
import ReactTableEx from "../Components/ReactTableEx";
import SearchBox from "../Components/SearchBox";
import SideBar from "../Components/Sidebar";
import TablePagination from "../Components/TablePagination";
import TodoApp from "../Components/Todo";
import "../App.css";
import UseReducerEx from "../Components/UseReducerEx";
const Dashboard = () => {
  const [state, setState] = useState({
    checkbox: false,
    useRedHook: false,
    todoOpen: false,
    useCon: false,
    useRef: false,
    searchBox: false,
    autoSuggest: false,
    table: false,
    homePage: false,
    tablePagination: false,
    useReducer:false,
  });

  return (
    <div className="App row">

      <SideBar state={state} setState={setState} className="col-md-4" />
      <main className="col-md-8">
        {state.checkbox && <SecondaryCheckbox />}
        {state.useRedHook && <UseReducer />}
        {state.todoOpen && <TodoApp />}
        {state.useCon && <UseContextHook />}
        {state.useRef && <UseRefUse />}
        {state.searchBox && <SearchBox />}
        {state.autoSuggest && <AutoSuggestt />}
        {state.table && <ReactTableEx />}
        {state.homePage && <HomePage />}
        {state.tablePagination && <TablePagination />}
        {state.useReducer && <UseReducerEx />}
      </main>
    </div>
  );
};

export default Dashboard;
