import './App.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

function App() {
  const { error, search, setSearch } = useSearch()  
  const { movies, loading, getMovies} = useMovies({search})

  const handleSubmit = (e)=>{
    e.preventDefault()
    getMovies()
    
  }
  const handleChange = (e)=> {
    const newName = e.target.value
    setSearch(newName) 
  }
  
  return (
    <>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
        <label>Movie Name:
        <input type="text" value={search} onChange={handleChange} placeholder='Avenger, Hulk, ...'/>
        </label>
        <button>Search</button>
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