import './App.css'
import { Movies } from './components/Movies';
import useDebounce from './hooks/useDebounce';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';
import { useState, useEffect } from "react";

function App() {
  const [sort, setSort] = useState()
  const { error, search, setSearch } = useSearch()  
  const { movies, loading, getMovies} = useMovies({search, sort})
  const debounceSearch = useDebounce(search, 350)

  
  const handleSubmit = (e)=>{
    e.preventDefault()
    getMovies({search})
    
  }
  const handleChange = (e)=> {
    const newName = e.target.value
    if (newName.startsWith(' ')) return
    setSearch(newName)    
  }

  useEffect(() => {
    if (debounceSearch) {
      getMovies({search:debounceSearch})
    }
  }, [getMovies, debounceSearch]);

  const handleSort = ()=> {
    setSort(!sort)
  } 
  
  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
        <label>Movie Name:
        <input type="text" value={search} onChange={handleChange} placeholder='Avenger, Hulk, ...'/>
        </label>
        <button disabled={loading}>Search</button>
        {
        movies?.length > 0 && 
        <label>
          <input type="checkbox" onChange={handleSort} value={sort} name="sortMovies" id="sort" />
          Sort by Name
        </label>
        }
        </form>
        {error && <p style={{color:'red', marginTop:0}}>{error}</p>}        
      </header>
      <main className="main">
        {
        loading ? <h3>Cargando ...</h3> :<Movies movies= {movies}/>
        }
        
      </main>      
    </>
  )
}

export default App