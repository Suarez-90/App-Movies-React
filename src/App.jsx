import './App.css'
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { useSearch } from './hooks/useSearch';

function App() {
  const { error, search, setSearch } = useSearch()
  const { mappedMovies} = useMovies()

  const handleSubmit = (e)=>{
    e.preventDefault()
    
  }
  const handleChange = (e)=> {
    const newName = e.target.value
    setSearch(newName) 
    console.log(newName)
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
        <Movies movies= {mappedMovies}/>
      </main>      
    </>
  )
}

export default App