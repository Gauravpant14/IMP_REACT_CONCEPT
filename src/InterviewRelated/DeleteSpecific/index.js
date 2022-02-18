import { useState } from "react";

export default function DeleteItem() {
  const [items, setItems] = useState([5, 6, 7, 8, 9]);
  const [num, setNum] = useState();
  const addItem = () => {
    setItems([...items, Number(num)]);
  };
  const deleteItem = () => {
    const numArr = items;
    const newArr = numArr.filter((e) => Number(e) !== Number(num));
    setItems(newArr);
  };
  return (
    <div className="container">
      <div className="card">
        <header className="card-header">
          <strong>Remove Specific Item</strong>
        </header>
        <div className="card-content">
          <b>Array ={">"} </b>
          {JSON.stringify(items)}
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
            placeholder="Delete Item"
          />
        </div>
        <footer className="card-footer">
          <button onClick={() => addItem()}>Add Number</button>
          <button onClick={() => deleteItem()}>Delete Number</button>
        </footer>
      </div>
    </div>
  );
}
