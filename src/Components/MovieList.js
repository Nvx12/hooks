import MovieCard from "./MovieCard";

const MovieList = ({ movies, titre, etoile, setMovies }) => {
  var x = movies.filter(
    (el) =>
      el.title.toUpperCase().includes(titre.toUpperCase()) &&
      el.rating >= etoile
  );
  return (
    <>
      <div className="hero-container" data-aos="fade-up">
        <div className="list">
          {x.length === 0 ? (
            <h1>Not Found</h1>
          ) : (
            x.map((el) => (
              <MovieCard
                key={el.id}
                el={el}
                movies={movies}
                setMovies={setMovies}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
