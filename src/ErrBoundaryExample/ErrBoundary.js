import React from 'react'

function ErrBoundary({heroName}) {
    if(heroName === 'joker'){
        throw new Error('Not a hero');
    }
  return (
    <div>Hero</div>
  )
}

export default ErrBoundary