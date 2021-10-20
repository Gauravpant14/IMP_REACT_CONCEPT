import React, {useEffect, useState} from 'react'
import Autosuggest from 'react-autosuggest';


export const AutoSuggestt = () => {
    const [languages,setLanguages] = useState([])
    const fetchCountry = async() => {
        const res = await fetch('https://api.first.org/data/v1/countries');
        const result = await res.json();
        const finalResult = Object.entries(result.data).map(([k,v]) => ({
            name: v.country,
            region: v.region,
        }))
        console.log(finalResult)
        setLanguages(finalResult);
    }
    useEffect(() =>{
        fetchCountry();
    },[]);
    const [value, setValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    
    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
      
        const res = languages.filter(lang =>
          lang.name.toLowerCase().includes(inputValue)
        );
        console.log(res.map((name) => name.name));
       return res.map((name) => name.name);
        
    }

    return (
        <div>
            { value  &&  <button onClick={() => setValue('')}>X</button> }
           
            <Autosuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }) => {
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log("Selected: " + suggestionValue)
        }
        getSuggestionValue={suggestion => suggestion}
        renderSuggestion={suggestion => <span>{suggestion}</span>}
        inputProps={{
          placeholder: "Type 'c'",
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          }
        }}
        highlightFirstSuggestion={true}
      />
        </div>
    )
}
