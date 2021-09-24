import { getByText } from '@testing-library/dom';
import React,{useState,useEffect} from 'react'

const SearchBox = () => {
    const [countryApi,setCountryApi] = useState([]); // save filtered result to this state
    const [countryList,setCountries] = useState([]); //We will filter using this state
    const getCountries = async() => {
        const res = await fetch('https://api.first.org/data/v1/countries');
        const result = await res.json();
        const countryArr = Object.entries(result.data).map(([k,v]) => ({
            value: k,
            label: v,
        }));
        setCountryApi(countryArr);
        setCountries(countryArr);
    }
    
    const getByText = (e) => {
        const word = e.target.value;
        const filteredCountry = countryApi.filter((countr) => countr.label.country.toLowerCase().includes(word.toLowerCase()));
        setCountries(filteredCountry);
    }
    let val = [];
    const getCheckBoxVal = (e) => {
        const checked = e.target.checked;
        const label = e.target.value;
     if(checked){
      val.push({name: label, isChecked:checked})
     }
     else{
        val = val.filter((e) => e.name !== label)
     }
    }
    const getValues = () =>{
        console.log(val);
    }
    useEffect(() => {
        getCountries();
    }, [])
    return (
        <div className="container">
           <input type="search" onChange={(e) =>getByText(e) } />
           <button onClick={()=> getValues()}>Selected Value</button>

           <ul className="searchBox">
           {countryList?.map((event,i) => <div>
              <input type="checkbox" value={event.label.country} onChange={(e)=> getCheckBoxVal(e)}/> <span key={i}>{event.label.country}</span>
               </div>)}

           </ul>
        </div>
    )
}

export default SearchBox
