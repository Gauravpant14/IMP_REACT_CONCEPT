import { useState } from "react";
import CodeModal from "../../Components/CodeModal";

export default function ReverseString() {
  const [dummyStr, setDummyString] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const reverseStr = (method) => {
    const str = dummyStr;
    if (method == "char") {
      const strArr = str.split("");
      let reverseArr = [];
      for (let i = strArr.length - 1; i >= 0; i--) {
        reverseArr.push(strArr[i]);
      }
      return <span>{reverseArr.join("")}</span>;
    } else {
      const strArr = str.split(" ");
      let reverseArr = [];
      for (let i = strArr.length - 1; i >= 0; i--) {
        reverseArr.push(strArr[i]);
      }
      return <span>{reverseArr.join(" ")}</span>;
    }
  };

  const code = () => {
    return (
     <code>
       <p>const str = {dummyStr};</p>
       <p>let reversedArr = []</p> 
       <p>const arrStr = str.split('');</p>
       <p> for (let i = arrStr.length - 1; i {">"}= 0; i--) {
       
        `reverseArr.push(strArr[i])`
       }
      </p>
      <p>Const revversedString = reverdedArr.join('')</p>
      </code>
    );
  };
  const closeModal = (e) => {
console.log(e);
    setModalActive(e)
  }
  return (
    <div className="container">
      <div className="card">
        <header className="card-header">
          <b>Reverse A String</b>
        </header>
        <div className="card-content">
          <input
            type="text"
            value={dummyStr}
            onChange={(e) => setDummyString(e.target.value)}
            placeholder="Type anything"
          />

          <p className="mt-3">
            <strong>Reverse Each Char In String: </strong> {reverseStr("char")}
          </p>
          <br />
          <p>
            <strong>Reverse Words In String: </strong> {reverseStr("word")}
          </p>
        </div>
        <footer className="card-footer">
          <button onClick={() => setModalActive((p) => !p)}>Show Code</button>
        </footer>
      </div>
      <CodeModal
        isActive={modalActive}
        closeModal={closeModal}
        code={code}
      />
    </div>
  );
}
