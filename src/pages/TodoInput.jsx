import React from 'react'
import moon from '../assets/moon.svg'

const TodoInput = () => {
  return (
    <>
        <div className='flex justify-center mt-5 gap-3'>
            <input type='text' className='border-[#6C63FF] border-1 w-[480px] h-[38px] rounded-[5px] pl-1.5 items-center' 
            placeholder='Search' >
                
            </input>
            <div className='flex justify-center gap-1'>

            <select className='bg-[#6C63FF] p-2 rounded-[5px] text-white'>
                <option value="all"> All</option>
                <option value="all"> Done</option>
            </select>

            <button type='button' className='bg-[#6C63FF] p-2 rounded-[5px]'><img src={moon}></img></button>
            </div>
        </div>

    </>
  )
}

export default TodoInput