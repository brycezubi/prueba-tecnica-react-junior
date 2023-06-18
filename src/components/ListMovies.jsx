import Movie from "./Movie";

const ListMovies = ({hashMovies , movies}) => {
  return (
    <>
      {hashMovies ? (
        <>
          <h2 className="subtitle pb-10">Listado de Peliculas</h2>
          <section className="grilla">
            {movies.map((movie) => (
             <Movie key={movie.imdbID} {...movie}/>
            ))}
          </section>
        </>
      ) : (
        <h2 className="subtitle">Sin Registros</h2>
      )}
    </>
  );
};

export default ListMovies;
