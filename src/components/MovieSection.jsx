import FetchMovies from "./FetchMovies";

const MovieSection = ({ title, query }) => (
  <FetchMovies query={query}>
    {(movies) => (
      <div className="container mt-4">
        <h4>{title}</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {movies.map((movie) => (
            <div className="col mb-2 text-center px-1" key={movie.imdbID}>
              <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
        </div>
      </div>
    )}
  </FetchMovies>
);

export default MovieSection;
