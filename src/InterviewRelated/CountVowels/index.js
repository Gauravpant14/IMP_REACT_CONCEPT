import React, { useRef, useState } from "react";

const CountVowels = () => {
  const [str, setStr] = useState("");
  const countRef = useRef();
  const vowelList = useRef();
  const countVowels = () => {
    let strArr = str.split("");
    const vowelsArr = strArr.filter((val) =>
      ["a", "e", "i", "o", "u"].includes(val)
    );
    vowelList.current.innerText = vowelsArr.join(" ,");
    countRef.current.innerText = vowelsArr.length;
  };
  return (
    <div className="container mt-4">
      <div className="card">
        <header className="card-header">Count Vowels</header>
        <div className="card-content">
          <input
            type="text"
            value={str}
            onChange={(e) => setStr(e.target.value)}
          />
          <p>
            Vowel Count ={">"} <span ref={countRef}></span>
          </p>
          <p>
            Vowels ={">"} <span ref={vowelList}></span>
          </p>
        </div>
        <footer className="card-footer">
          <button onClick={() => countVowels()}>Vowels</button>
        </footer>
      </div>
    </div>
  );
};

export default CountVowels;
