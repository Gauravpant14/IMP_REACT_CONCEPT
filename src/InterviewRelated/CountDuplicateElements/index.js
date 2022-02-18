import React, { useRef, useState } from "react";

// how will we count duplicates....
// 1. We can filter all duplicates elements...
//2 . orr we have to loop through the values of array and have to compare array elemet
// with other elents ..if element value is same then we can push that elemt to array....
// 3. may be we have to loop two times , first time it will loop from index 0 next time from index 1

const CountDuplicateElem = () => {
  let [arr,setArr] = useState([2,2]);
  const spanRef = useRef();
  const arrRef = useRef();
  const countDuplicates = () => {
    let duplicates = 0;
    let duplicatesArr = [];
    //1 = 2

    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++)
        if (arr[i] == arr[j]) {
          console.log(arr[i], arr[j]);
          duplicates++;
          duplicatesArr.push(arr[i]);
          break;
        }
      // continue;
    }
    spanRef.current.innerText =
      JSON.stringify(duplicates) +
      "  Dupicates are  " +
      JSON.stringify(duplicatesArr);
  };

  const removeDuplicates = () => {
    const newArr = [...new Set(arr)];
    arrRef.current.innerText = JSON.stringify(newArr)
  }

  const multiplyArr = () => {
      const multipliedArr = arr.map((val) => val * arr.length);
      setArr(multipliedArr)
  }
  return (
    <div className="container">
      <div className="card">
        <header className="card-header">
          <b>Count Number of Duplicates in an array</b>
        </header>
        <div className="card-content">
          <b>Array :</b>
          
          {JSON.stringify(arr)}
          <br />
          <b>Array after removing duplicates</b>
          <span ref={arrRef}></span>
          <br />
          Duplicates count = <span ref={spanRef}></span>
          <br />
        </div>
        <footer className="card-footer">
          <button onClick={() => countDuplicates()}>Cout duplicates</button>
          <button onClick={() => removeDuplicates()}>Remove Duplicates</button>
          <button onClick={() => multiplyArr()}>Multiply Each Element with array length</button>
        </footer>
      </div>
    </div>
  );
};

export default CountDuplicateElem;
