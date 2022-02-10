import React, { useState } from 'react'

const SwapNumber = () => {
    const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(20);
  const swapNumber = () => {
    let n1 = num1;
    let n2 = num2;
    n1 = n1 + n2;
    n2 = n1 - n2;
    n1 = n1 - n2;
    setNum1(n1);
    setNum2(n2);
  };
  return (
    <div>
        <div className="container">
        <h2>Swapping Two Numbers</h2>
        <code>
          let n1 = {num1};
          <br />
          let n2 = {num2};
          <br />
          n1 = n1+n2;
          <br />
          n2 = n1-n2;
          <br />
          n1 = n1-n2;
        </code>
        <br />
        <label>Number First: {num1}</label>
        <br />
        <label>Number Second: {num2}</label>
        <br />
        <button onClick={swapNumber}>Swape Numbers</button>
      </div> 
    </div>
  )
}

export default SwapNumber