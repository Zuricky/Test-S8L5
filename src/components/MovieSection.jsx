import FetchMovies from "./FetchMovies";

const MovieSection = ({ title, query }) => (
  <FetchMovies query={query}>
    {(movies) => (
      <div className="container-fluid mt-4">
        <h4>{title}</h4>
        <div className="container-fluid row row-cols-2 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {movies.map((movie) => (
            <div href="#" className="col mb-2 text-center" key={movie.imdbID}>
              <a href="#">
                <img className="img-fluid" src={movie.Poster} alt={movie.Title} style={{ height: "300px" }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    )}
  </FetchMovies>
);

export default MovieSection;
