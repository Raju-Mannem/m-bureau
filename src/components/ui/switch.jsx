/* eslint-disable react/prop-types */
import { useState } from 'react'

const Switcher4 = ({ setIsMale }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsMale(e=>!e);
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-4 sm:h-6 w-8 sm:w-12 rounded-full ${
              isChecked ? 'bg-blue-600' : 'bg-gray-800'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-2 sm:h-4 w-3 sm:w-4 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </>
  )
}

export default Switcher4
