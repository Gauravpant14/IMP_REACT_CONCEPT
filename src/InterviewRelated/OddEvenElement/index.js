import React , { useRef } from "react";


const OddEvenElement = () => {
  const arr = [
    "Gaurav",
    "Pant",
    "is",
    "now",
    "coding",
    "dont",
    "disturb",
    "him",
  ];
  const evenRef = useRef();
  const oddRef = useRef();
  const findOddEven = () => {
      const oddELements = arr.filter((num,index) => (index%2 !== 0) )
      const evenElemts = arr.filter((num,index) => (index%2 === 0))
      console.log(oddELements);
      oddRef.current.innerText = oddELements.join(',');
      evenRef.current.innerText = evenElemts.join(',');
  };
  return (
    <div className="container">
      <div className="card">
        <header className="card-header">
          <b>Even and Odd Position Array element</b>
        </header>
        <div className="card-content">
          <p>{JSON.stringify(arr)}</p>
          <p>
            <b>Odd ELement : </b>
            <span ref={oddRef}></span>
          </p>
          <p>
            <b>Even ELement : </b>
            <span ref={evenRef}></span>
          </p>
        </div>
        <footer className="card-footer">
          <button onClick={() => findOddEven()}>
            Find Odd and Even Position Element
          </button>
        </footer>
      </div>
    </div>
  );
};

export default OddEvenElement;
