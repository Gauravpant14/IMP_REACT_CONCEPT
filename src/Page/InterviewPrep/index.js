import React from "react";
import AverageProgram from "../../InterviewRelated/AverageProgram";
import CapitalizeFirstLetter from "../../InterviewRelated/CapitalizeFirstLetter";
import CountDuplicateElem from "../../InterviewRelated/CountDuplicateElements";
import CountVowels from "../../InterviewRelated/CountVowels";
import DeleteItem from "../../InterviewRelated/DeleteSpecific";
import InterviewStuff from "../../InterviewRelated/Interview25Feb";
import LongestInString from "../../InterviewRelated/LongestInString";
import OddEvenElement from "../../InterviewRelated/OddEvenElement";
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
     <DeleteItem />
     <OddEvenElement />
     <CountDuplicateElem />
     <InterviewStuff />
    </div>
  );
};

export default InterviewPrep;
