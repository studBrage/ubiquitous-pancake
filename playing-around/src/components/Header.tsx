import React from 'react'

export const Header = () => {
  return (
    <div className="flex fixed justify-between w-full backdrop-blur-[1.5px] bg-black/20 p-4 items-center text-black">
        <div className="mr-6">
          <span className="text-3xl tracking-tight">Text warper</span>
        </div>
        <nav className="items-center justify-between px-2  text-black">
            <ul className="hidden md:flex gap-4 p-2 uppercase">
              <li className='p-4 hover:bg-black/10 hover:cursor-pointer'><a href="#">Home</a></li>
              <li className='p-4 hover:bg-black/10 hover:cursor-pointer'><a href="#">About</a></li>
            </ul>        
        </nav>
      </div>
  );
}
