import Results from '@/components/Results'
import Image from 'next/image'

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending'

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=39fd8fce952a263073e44496d5636d90&language=en-US&page=1`, {next: {revalidate: 10000}})

  if(!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()
  const results = data.results
  

  return (
    <div>
      <Results results={results} />
    </div>
  )
}
