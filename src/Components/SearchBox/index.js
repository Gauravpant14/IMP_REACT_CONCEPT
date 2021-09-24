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
    useEffect(() => {
        getCountries();
    }, [])
    return (
        <div className="container">
           <input type="search" onChange={(e) =>getByText(e) } />
           <ul>
           {countryList?.map((e,i) => <li key={i}>{e.label.country}</li>)}

           </ul>
        </div>
    )
}

export default SearchBox
