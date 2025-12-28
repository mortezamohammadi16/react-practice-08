import React from 'react'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'
const Card = () => {
  return (
    <>
        <div className='flex justify-center mt-6'>
            <div className='flex justify-between items-start w-[600px] h-[40px] bg-gray-100 rounded-[5px]'>
                <div className='flex'>
                    <input type="checkbox" name="check" id="check" className='m-3 w-[16px] h-[16px] cursor-pointer'/>
                    <h3 className='mt-2 text-sm'>this is subject</h3>
                </div>
                <div className='flex'>
                    <button type="button"className='cursor-pointer'><img src={edit}></img></button>
                    <button type="button"className='m-3 cursor-pointer '><img src={trash}></img></button>
                </div>
            </div>
            
        </div>
    
    </>
  )
}

export default Card