import React, {useEffect, useState} from 'react'

type TextWarpCard2props = {
  text?: string;
}

export const TextWarpCard2 = ({text = ""}:TextWarpCard2props) => {

    const [newColor, setColor] = useState('')
    
    useEffect(() => {
        var bipColor = sessionStorage.getItem('bipColor')
        if (bipColor == null){
            bipColor = Math.floor(Math.random()*16777215).toString(16);
        }
        sessionStorage.setItem('bipColor', bipColor)
        setColor(bipColor)
    },[]);

  const warped = text.replaceAll(' ', ' BIPPITI ');

  const splitText = warped.split(' ');

  return (
    <div className='p-6 max-w-md bg-white rounded-lg border border-gray-200'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Write some text and see what you get!</h5>
      <div className='pb-3'>
      {splitText.map((t)=> {
          const randomColor = Math.floor(Math.random()*16777215).toString(16);
          if ( t == 'BIPPITI'){
              return <p className='inline break-all' style={{color:'#' + newColor}}> {t} </p>
            } else {
                return <p className='inline break-all' style={{color:'#'+randomColor}}> {t} </p>
            }
        })}
        </div>
        <button className='outline rounded-sm p-1' onClick={() => {
            sessionStorage.setItem('bipColor', Math.floor(Math.random()*16777215).toString(16));
            var newCol = sessionStorage.getItem('bipColor');
            setColor(newCol ? newCol : 'FFFFFF');
        }
        }>Change the bip</button>
    </div>
  );
}
