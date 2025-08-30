// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="fixed h-20 w-screen bg-[#2d9f63] text-white flex justify-between items-center px-10">
      
  
//       <div className='bg-white h-16 w-96 rounded-md flex items-center justify-center hidden md:flex'>
//         <ul className='flex gap-8 text-black'>
//           <li><a href="/">Home</a></li>
//           <li><a href="/recipes">Recipe</a></li>
//           <li><a href="/contact">Contact</a></li>
//         </ul>
//       </div>

//       <div className='mr-10'>
//         <h1 className='font-bold text-xl'>RECIPE FINDER</h1>
//       </div>

//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed h-20 w-screen bg-[#2d9f63] text-white flex justify-between items-center px-10">
      
      {/* Logo */}
      <div className='font-bold text-xl'>
        RECIPE FINDER
      </div>

      {/* Desktop Menu */}
      <div className='bg-white h-16 w-96 rounded-md items-center justify-center hidden md:flex'>
        <ul className='flex gap-8 text-black'>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipe</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Hamburger */}
      <button 
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-20 right-5 bg-white text-black rounded-lg shadow-md p-5 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="/recipes" onClick={() => setIsOpen(false)}>Recipe</a></li>
            <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
