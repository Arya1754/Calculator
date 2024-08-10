import React, { useContext } from 'react'
import ButtonBox from './ButtonBox'
import { CalcContext } from '../context/CalcContext';
import {Textfit} from 'react-textfit'

const Screen = () => {
    const btnValues = [
        ["C", "+-", "%", "/"],
        [7, 8, 9, "x"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
        ];

    const {calc}=useContext(CalcContext)
    
  return (
    <div >
        <Textfit className='screen' max={70}>{calc.num?calc.num:calc.res}</Textfit>
        <ButtonBox btnValues={btnValues} />
    </div>
  )
}

export default Screen
