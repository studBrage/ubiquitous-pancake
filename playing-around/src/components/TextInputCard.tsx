import React, {useState} from 'react'

type TextInputCardProps = {
  onChange: (text:string) => void;
}

export const TextInputCard = ({onChange}:TextInputCardProps) => {


  return (
    <div className='p-6 max-w-xl bg-white rounded-lg border border-gray-200'>
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Write some text and see what you get!</h5>
      <div className='p-4'>
      <textarea onChange={(e) => onChange(e.target.value)} rows={4} className='max-h-lg w-full ring-1 ring-slate-400 rounded-md p-2.5' placeholder='Write something!'/>
      </div>
    </div>
  )
}
