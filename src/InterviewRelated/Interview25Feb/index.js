import React, { useState } from "react";

const InterviewStuff = () => {
  const [val, setVal] = useState("");
  const [item, setItem] = useState([]);
  const [editBtnClicked, setEditBtnClicked] = useState(false);
  const setValueFun = (e) => {
    setVal(e.target.value);
  };
  const pushItemFun = () => {
    setEditBtnClicked(false);
    const d = new Date();
    let id = d.getTime();
    const obj = {
      id: id,
      value: val,
    };
    setItem([...item, obj]);
    setVal("");
  };
  const getDetails = (e) => {
    const filteredItems = item.filter((x) => x.id !== e.id);
    setItem(filteredItems);
  };

  const editItemFun = (e) => {
    setEditBtnClicked(true);
    localStorage.setItem('id',e.id);
    setVal(e.value);
  };

  // get item, 
  // get his id, 
  // hold id,
  // add item from val and id will be old id..and push it...

  const saveData = () => {
    const findId = item.find((e) => e.id == localStorage.getItem('id'))
    findId.value = val;
    // console.log(findId);
    setItem((p) => {
      return p.map(v => {
        if(v.id == findId.id){
          p.values = findId.value
        }
      }) 
    });
    setEditBtnClicked(false); 
    setVal('')
  };
  return (
    <div className="container">
      <input type="text" value={val} onChange={(e) => setValueFun(e)} />
      {editBtnClicked ? (<div>
        <button onClick={() => saveData()}>Save</button>
        <button onClick={() => {setEditBtnClicked(false); setVal('')}}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => pushItemFun()}>Add</button>
      )}

      <br />
      <br />

      {item.map((e) => (
        <div key={e.id}>
          {e.value}
          <button onClick={() => getDetails(e)}>-</button>
          <button onClick={() => editItemFun(e)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default InterviewStuff;
