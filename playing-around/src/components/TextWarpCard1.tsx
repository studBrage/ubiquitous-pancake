import { Console } from 'console';
import React from 'react'


type TextWarpCard1props = {
  text?: string;
}

export const TextWarpCard1 = ({text = ""}:TextWarpCard1props) => {

  const warped = text.replaceAll(' ', ' BIPPITI ');



  return (
    <div className='p-6 max-w-md bg-white rounded-lg border border-gray-200'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Write some text and see what you get!</h5>
      <p className='mb-3 font-normal text-gray-700 break-all'>{warped}</p>
     
    </div>
  )
}
