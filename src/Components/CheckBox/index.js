import React from 'react'

const CheckBox = ({ name, label, onChange, checked,value }) => {
    return (
        <li key={name}>
        <label>
          <input
            type="checkbox"
            name={name}
            onChange={onChange}
            checked={checked}
            value={value}
          />
          {label}
        </label>
      </li>
    )
}

export default CheckBox
