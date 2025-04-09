
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
    return NoListMovies.Error
}

export function Movies ({movies}) {
    const hasMovies = movies.length > 0
    return (  
        hasMovies ? listOfMovies({movies}) : noMovies 
    );
} 
