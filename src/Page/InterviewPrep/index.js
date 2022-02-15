import React from "react";
import AverageProgram from "../../InterviewRelated/AverageProgram";
import CapitalizeFirstLetter from "../../InterviewRelated/CapitalizeFirstLetter";
import CountVowels from "../../InterviewRelated/CountVowels";
import LongestInString from "../../InterviewRelated/LongestInString";
import ReverseString from "../../InterviewRelated/ReverseString";
import SwapNumber from "../../InterviewRelated/SwapNumber";


const InterviewPrep = () => {
  const divStyle = {
  width:'100vw',  
  display:"flex", 
  flexWrap:'wrap', 
  justifyContent:'space-between',
  
}
  return (
    <div style={divStyle}>
     <SwapNumber />
     <CapitalizeFirstLetter />
     <ReverseString />
     <LongestInString />
     <AverageProgram />
     <CountVowels />
    </div>
  );
};

export default InterviewPrep;
