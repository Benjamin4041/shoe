import React from 'react'

export default function Sizebox({disable,shoeSize}) {
  return (
    <div className={disable?'border-[#dddddd] border-2 w-8 rounded cursor-pointer':'border-[#dddddd] border-2 w-8 rounded cursor-pointer'}>
        <p className={disable?'text-[#dddddd] text-center':'text-[#5b6561] text-center'}>
            {shoeSize}
        </p>
    </div>
  )
}
