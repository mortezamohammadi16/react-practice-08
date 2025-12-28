import React, { useState } from 'react'
import moon from '../assets/moon.svg'

const TodoInput = ({value, onChange, onAdd}) => {


  return (
    <>
        <div className='flex justify-center mt-5 gap-3'>
            <input type='text' className='border-[#6C63FF] border-1 w-[480px] h-[38px] rounded-[5px] pl-1.5 items-center' 
            placeholder='write your next task' value={value} onChange={onChange} >
                
            </input>
            <button type='submit' className='bg-[#6C63FF] p-2 rounded-[5px] text-white' onSubmit={onAdd}>save</button>
            <div className='flex justify-center gap-1'>

            <select className='border-[1px] border-[#6C63FF] p-2 rounded-[5px] text-[#6C63FF]'>
                <option value="all"> All</option>
                <option value="all"> Done</option>
            </select>

            {/* <button type='button' className='bg-[#bcb9fe] p-2 rounded-[5px]'><img src={moon}></img></button> */}
            </div>
        </div>

    </>
  )
}

export default TodoInput