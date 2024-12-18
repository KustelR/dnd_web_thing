import React from 'react'

export default function CustomButton({children, lng}: {children: React.ReactNode, lng: string}) {
  return (
    <button className="
    bg-black
    px-2
    hover:bg-cyan-500
    hover:bg-opacity-20
    active:bg-opacity-50
    transition-all
    duration-500
    active:duration-75
    focus:outline-2
    focus:outline-cyan-300" >{children}</button>
  )
}
