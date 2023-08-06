'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

const Providers = ({children}) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-700 dark:text-gray-200 light:text-gray-700 transition-colors duration-500 ease min-h-screen select-none'>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Providers