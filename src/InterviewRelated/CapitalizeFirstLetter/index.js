import React, { useState } from "react";

const CapitalizeFirstLetter = () => {
  const [dummyString, setDummyString] = useState("gaurav pant 14");
  const [capitalized, setCapitalized] = useState("");
  const [firstLetter, setFirstLetter] = useState("");
  const [totalChar, setTotalChar] = useState({
    char: "",
    word: "",
  });

  const countFunction = (e) => {
    let str = dummyString;
    if (e == "char") {
      const strArr = str.split("");
      const filterSpace = strArr.filter((e) => e !== " ");
      setTotalChar((p) => {
        return {
          ...p,
          char: filterSpace.length,
        };
      });
    } else if (e == "word") {
      const strArr = str.split(" ");
      const filterSpace = strArr.filter((e) => e !== " ");
      setTotalChar((p) => {
        return {
          ...p,
          word: filterSpace.length,
        };
      });
    }
  };

  const capitalizeFun = () => {
    let str = dummyString;
    const strArr = str.split(" ");

    //   console.log(object);
    const capitalizeArr = strArr
      ?.map((e, i) => e[0]?.toUpperCase() + e.slice(1))
      .join(" ");
    setCapitalized(capitalizeArr);
  };

  const capitalizeFirstWord = () => {
    const str = dummyString;
    setFirstLetter(str.charAt(0).toUpperCase() + str.slice(1));
  };
  return (
    <div>
      <div className="card">
        <header className="card-header">
          Capitalize First Letter of a String
        </header>
        <div className="card-content">
          <code>
            let str = {dummyString};
            <br />
            const strArr = str.split(' ');
            <br />
            const capitalizeArr = strArr?.map((e,i) ={">"}{" "}
            e[0]?.toUpperCase()+e.slice(1) ).join(' ')
          </code>
          <div>
            <input
              type="text"
              value={dummyString}
              onChange={(e) => setDummyString(e.target.value)}
            />
            <br />
            <label>
              <b>String :</b> {dummyString}
            </label>
          </div>
          <div>
            {Object.values(totalChar).filter((val) => val !== "").length !==
              0 && (
                <div>
                  {totalChar.char && (
                    <span>Total Character = {totalChar.char}</span>
                  )}
                  <br />
                  {totalChar.word && <span>Total Words = {totalChar.word}</span>}
                  <br />
                  <span>*Not including space</span>
                </div>
              )}
            {
              <p>
                <b>Capitalize =={"> "}</b>
                {capitalized}
              </p>
            }
            {
              <p>
                <b>Capitalize First Letter=={"> "}</b>
                {firstLetter}
              </p>
            }
          </div>
          <br />
        </div>
        {/* {capitalizeFun()} */}
        <footer className="card-footer">
          <button
            className="card-footer-item"
            onClick={() => countFunction("char")}
          >
            Count Characters
          </button>
          <button
            className="card-footer-item"
            onClick={() => countFunction("word")}
          >
            Count Words
          </button>
          <button className="card-footer-item" onClick={() => capitalizeFun()}>
            Capitalize All
          </button>
          <button
            className="card-footer-item"
            onClick={() => capitalizeFirstWord()}
          >
            Capitalize First Letter
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CapitalizeFirstLetter;
