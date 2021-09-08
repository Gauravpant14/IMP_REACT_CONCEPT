import React, { useState, useEffect } from "react";
import festival from "../../data/festival.json";
import CheckBox from "./PrimaryCheckBox";
const SecondaryCheckbox = () => {
  const [tData, setData] = useState({
    allChecked: false,
    data: [
      { name: "New Year's Day", selected: false },
      { name: "Martin Luther King, Jr. Day", selected: false },
      { name: "George Washington's Birthday", selected: false },
      { name: "Memorial Day", selected: false },
      { name: "Independence Day", selected: false },
      { name: "Labor Day", selected: false },
      { name: "Columbus Day", selected: false },
      { name: "Veterans Day", selected: false },
      { name: "Thanksgiving Day", selected: false },
      { name: "Christmas Day", selected: false },
    ],
  });

  const handleChange = (e) => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    setData((p) => {
      let { allChecked, data } = p;
      //when all is selected then all the checkbox will be true
      if (itemName === "all") {
        allChecked = checked;
        data = data.map((item) => ({ ...item, selected: checked }));
      }
      else {
          data = data.map((e) => 
              e.name === itemName ? {...e, selected: checked } : e
          );
          allChecked = data.every((item) => item.selected);
          if(allChecked === false){
              setData((p) => {
                  let {allChecked,data} = p;
                  allChecked = false;
                  data = data.map((e) => ({...e}))
                  return { allChecked,data }

              })
          }
          console.log(allChecked,"checkAllChecked", "and data", data);
      }
      return { allChecked, data };
    });
  };

  return (
    <div className="container">
      <h2>Checkboxes</h2>
      <input
        type="checkbox"
        name="all"
        value="all"
        onChange={(e) => handleChange(e)}
        checked={tData.allChecked}
      />
      <label htmlFor="all">Check All</label>
      {tData.data.map((ele) => (
        <CheckBox
          name={ele.name}
          label={ele.name}
          checked={ele.selected}
          onChange={(e) => handleChange(e)}
        />
      ))}
    </div>
  );
};

export default SecondaryCheckbox;
