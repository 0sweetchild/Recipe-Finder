import React from 'react';

function Navbar() {
  return (
    <nav className="fixed h-20 w-screen bg-[#2d9f63] text-white flex justify-between items-center px-10">
      
  
      <div className='bg-white h-16 w-96 rounded-md flex items-center justify-center hidden md:flex'>
        <ul className='flex gap-8 text-black'>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipe</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className='mr-10'>
        <h1 className='font-bold text-xl'>RECIPE FINDER</h1>
      </div>

    </nav>
  );
}

export default Navbar;
