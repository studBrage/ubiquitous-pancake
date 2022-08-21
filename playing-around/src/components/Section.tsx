import React,{useState} from 'react'
import { TextInputCard } from './TextInputCard'
import { TextWarpCard1 } from './TextWarpCard1'
import { TextWarpCard2 } from './TextWarpCard2'

export const Section = () => {

  const [text, setText] = useState('')


  return (
    <div className='grow flex items-center justify-center'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='row-span-2 flex items-center'>
        <TextInputCard  onChange={setText}/>
        </div>
        
        <TextWarpCard1 text={text}/>
       
        <TextWarpCard2 text={text}/>
      </div>
    
    </div>
  )
}
