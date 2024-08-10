import React from 'react'
import Button from './Button'
const ButtonBox = ({btnValues}) => {
  return (
    <div className='buttonbox'>
        
      {btnValues.flat().map((btn, i) => (
        <Button key={i} value={btn} />
      ))}
    </div>
  )
}

export default ButtonBox
