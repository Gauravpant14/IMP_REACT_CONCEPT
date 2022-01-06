import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SagaProfile = () => {
  const {userReducer} = useSelector((state) => state);
  const name = userReducer.name
  const age =userReducer.age
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hello Dev's welcome {name}</h2>
      <h2>
        {name} born year is  {age}
      </h2>
      <button
        onClick={() => dispatch({ type: "UPDATE_NAME"})}
      >
        Update Name
      </button>
      <button onClick={() => dispatch({ type: "UPDATE_DOB"})}>Update DOB</button>
    </div>
  );
};

export default SagaProfile;
