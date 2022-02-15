import { useRef, useState } from "react";

export default function LongestInString() {
    const [dummyString,setDummyString] = useState('Lets Find Out Which is longesttt character');
    const [val,setVal] = useState('');
    const [longestString,setLongestString] = useState('');

    const findLongest = () => {
        let str = dummyString;
        const strArray = str.split(' ');
        const longestLength = strArray.map((element,i) => {
            return {
                name:element,
                length:element.length
            }
        });
        console.log(longestLength);
        const largestString = longestLength.sort((a,b) => {return b.length - a.length})
        setLongestString((largestString[0].name));
    }

    const stringRef = useRef();
    const findSubstring = () => {
      let subString = JSON.stringify(dummyString.includes(val));
      stringRef.current.innerText = subString;
    }


  return (
    <div className="container mt-4">
      <div className="card">
        <header className="card-header">
            <b>Longest Word In String</b>
        </header>
        <div className="card-content">
           <input type="text" value={dummyString} onChange={(e) => setDummyString(e.target.value)} />
           <input type="text" value={val} onChange={(e) => setVal(e.target.value)} placeholder="Check Substring"/>
           <p><b>String ==={">"}</b>{dummyString}</p> 
           <p><b>Longest String =={">"}</b>{longestString}</p>
           <p><b>SubString String =={">"}</b><span ref={stringRef}></span></p>
        </div>
        <footer className="card-footer">

            <button onClick={() => findLongest()}>Longest String</button>
            <button onClick={() => findSubstring()}>SubString</button>
        </footer>
      </div>
    </div>
  );
}
