import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center px-4 py-5 h-14 '>

        <div className='logo font-bold text-2xl'>
          <span className='text-green-700'> &lt;</span>
          <span>Pass</span>
          <span className='text-green-600'>OP/&gt;</span>
        </div>

        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul> */}

        <button className='text-white my-5 bg-green-700 rounded-full flex justify-between items-center ring-white ring-1'>
          <img className=' w-10 p-1 rounded-2xl' src="icons/github.png" alt="github" />
          <span className='font-bold px-2'>GitHub</span>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
