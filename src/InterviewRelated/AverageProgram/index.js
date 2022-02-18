import { useRef, useState } from "react";

export default function AverageProgram() {
  const [num, setNum] = useState();
  const [numArr, setNumArr] = useState([]);
  const totalRef = useRef();
  const avgRef = useRef();
  const arraySetter = () => {
    setNumArr((p) => [...p, num]);
  };
  const findAvg = () => {
    console.log(typeof numArr[0]);
    const total = numArr.reduce((acc, val) => acc + val, 0);
    totalRef.current.innerText = total;
    const avg = total / numArr.length;
    avgRef.current.innerText = avg;
  };
  // const deleteArr = () => {
  //     setNumArr(numArr.pop())
  // }
  return (
    <div className="container mt-4">
      <div className="card">
        <header className="card-header">Average of Numbers</header>
        <div className="card-content">
          <p>
            Array of Number ={">"} {JSON.stringify(numArr)}
          </p>
          <label>Add Numbers in array : </label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(Number(e.target.value))}
          />
          <button onClick={() => arraySetter()}>Push</button>
          {/* <button onClick={() =>deleteArr()}>Delete</button> */}
          <p>
            <b>Total Sum : </b>
            <span ref={totalRef}></span>
          </p>
          <p>
            <b>Average ={">"} </b> <span ref={avgRef}></span>
          </p>
        </div>
        <footer className="card-footer">
          <button onClick={() => findAvg()}>Find Average</button>
        </footer>
      </div>
    </div>
  );
}
