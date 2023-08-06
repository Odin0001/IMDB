"use client"
import { useEffect } from "react"

const Error = ({error, reset}) => {

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="text-center mt-10">
      <h1>SomeThing Went Wrong</h1>
      <button onClick={() => reset()} className='hover:text-amber-600'>Try Again</button>
    </div>
  )
}

export default Error