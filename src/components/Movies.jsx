
import NoListMovies from "../mocks/no_result.json";

function listOfMovies ({movies}) {
    return (
        <ul>
        {
            movies.map(item => (
            <li key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.year}</p>
                <img src={item.poster} alt={item.title} />

            </li>
            ))
        }
        </ul>
    )
}

function noMovies (){
    return <h2>{NoListMovies.Error}</h2> 
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0 ? listOfMovies({movies}) : noMovies() 
    return (  
        hasMovies 
    );
} 
