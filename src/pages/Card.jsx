import React from 'react'
import edit from '../assets/edit.svg'
import trash from '../assets/trash.svg'


const Card = ({todos, onToggle, onDelete}) => {
  return (
    <>
        {todos.map(todo => (
        <div key={todo.id} className='flex justify-center mt-6'>
          <div className='flex justify-between items-start w-[600px] h-[40px] bg-gray-100 rounded-[5px]'>
            <div className='flex'>
              <input 
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
                className='m-3 w-[16px] h-[16px] cursor-pointer'
              />
              <h3 className={`mt-2 text-sm ${todo.done ? 'line-through text-gray-500' : ''}`}>
                {todo.title}
              </h3>
            </div>
            <div className='flex'>
              <button type="button" className='cursor-pointer'>
                <img src={edit} alt="edit" />
              </button>
              <button 
                type="button" 
                className='m-3 cursor-pointer'
                onClick={() => onDelete(todo.id)}
              >
                <img src={trash} alt="delete" />
              </button>
            </div>
          </div>
        </div>
      ))}
    
    </>
  )
}

export default Card