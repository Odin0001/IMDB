'use client'

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'

const SearchBox = () => {

  const [input, setInput] = useState('')
  const router = useRouter()

  function handleSubmit(e) {
    e.preventDefault()

    if(!input) return;
    router.push(`/search/${input}`)
  }

  return (
    <form className='flex max-w-6xl mx-auto justify-between items-center px-5' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search Keywords...' className='w-full h-14 rounded-sm placehold-gray-500 outline-none bg-transparent flex-1' onChange={(e) => setInput(e.target.value)} value={input} />
      <button className='text-amber-600 disabled:text-gray-400' disabled={!input}>
        Search 
      </button>
    </form>
    
  )
}

export default SearchBox