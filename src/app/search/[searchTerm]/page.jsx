import Results from '@/components/Results'
import React from 'react'

const SearchPage = async ({params}) => {

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=39fd8fce952a263073e44496d5636d90&query=${params.searchTerm}&language=en-US`)
  if(!res.ok) {
    throw new Error('Error Fetching Data')
  }

  const data = await res.json()
  const results = data.results

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No Results Found</h1>
      )}
      {results && <Results results={results} />}
    </div>
  )
}

export default SearchPage