import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "fName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
  }
}

const UseReducerExample3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => dispatch({ type: "fName", payload: e.target.value })}
          name="firstName"
          placeholder="firstName"
        />
        <input
          type="text"
          onChange={(e) => dispatch({ type: "lName", payload: e.target.value })}
          name="lastName"
          placeholder="lastName"
        />
        <input
          type="email"
          onChange={(e) => dispatch({ type: "email", payload: e.target.value })}
          name="email"
          placeholder="email"
        />
        <button type="submit">Submit</button>

        <p>
          {state.firstName} {state.lastName} {state.email}
        </p>
      </form>
    </div>
  );
};

export default UseReducerExample3;
