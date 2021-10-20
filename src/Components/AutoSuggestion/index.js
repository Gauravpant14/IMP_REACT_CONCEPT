import React, {useEffect, useState} from 'react'
import Autosuggest from 'react-autosuggest';
const languages = [
  {
    title: '1970s',
    languages: [
      {
        name: 'C',
        year: 1972
      }
    ]
  },
  {
    title: '1980s',
    languages: [
      {
        name: 'C++',
        year: 1983
      },
      {
        name: 'Perl',
        year: 1987
      }
    ]
  },
  {
    title: '1990s',
    languages: [
      {
        name: 'Haskell',
        year: 1990
      },
      {
        name: 'Python',
        year: 1991
      },
      {
        name: 'Java',
        year: 1995
      },
      {
        name: 'Javascript',
        year: 1995
      },
      {
        name: 'PHP',
        year: 1995
      },
      {
        name: 'Ruby',
        year: 1995
      }
    ]
  },
  {
    title: '2000s',
    languages: [
      {
        name: 'C#',
        year: 2000
      },
      {
        name: 'Scala',
        year: 2003
      },
      {
        name: 'Clojure',
        year: 2007
      },
      {
        name: 'Go',
        year: 2009
      }
    ]
  },
  {
    title: '2010s',
    languages: [
      {
        name: 'Elm',
        year: 2012
      }
    ]
  }
];

export const AutoSuggestt = () => {
  const [value,setValue] = useState('');
  const [suggestions,setSuggestions] = useState([]);
  const escapeRegexCharacters = (str) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return languages
      .map(section => {
        return {
          title: section.title,
          languages: section.languages.filter(language => regex.test(language.name))
        };
      })
      .filter(section => section.languages.length > 0);
  }
  const getSuggestionValue = (suggestion) => {
    console.log(suggestion)
    return suggestion.name;
  }

  const renderSuggestion = (suggestion) => {
    return (
      <span>{suggestion.name}</span>
    );
  }

  const renderSectionTitle = (section) => {
    return (
      <strong>{section.title}</strong>
    );
  }
  
  const getSectionSuggestions = (section) => {
    return section.languages;
  }

  const  onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };
    
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(
      getSuggestions(value)
    );
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type 'c'",
    value,
    onChange: onChange
  };

    return (
        <div>
            <Autosuggest
            multiSection={true}
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            renderSectionTitle={renderSectionTitle}
            getSectionSuggestions={getSectionSuggestions}
            inputProps={inputProps} />
           
        </div>
    )
}
