import React from 'react'

const Button = () => {
  const buttonList = ["All", "Cricket", "Sports", "Shorts", "Hollywood", "Vampire Diaries", "Breaking Bad"];
  return (
    <div>
      {
        buttonList.map((btn, count) => (
          <button key={count} className='mx-2 bg-gray-200 py-1 px-4  rounded-lg mt-2 mb-2'>{btn}</button>
        ))
      }
    </div>
  )
}

export default Button