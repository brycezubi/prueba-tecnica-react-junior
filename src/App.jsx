import Search from "./components/Search";
import ListMovies from "./components/ListMovies";
import { useMovie } from "./hooks/useMovie";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";
import { useCallback } from "react";

function App() {
  const { error, mensaje, query, setQuery } = useSearch();
  const { sortedMovies, getMovies, hashMovies, loading, sort, handleSort } =
    useMovie();

  const debounceMovies = useCallback(
    debounce((query) => getMovies(query), 500),
    []
  );

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    debounceMovies(newQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(query);
  };

  return (
    <>
      <header className="container mx-auto my-10">
        <h1 className="text-center text-4xl font-bold uppercase text-red-600">
          Search Movie App
        </h1>

        <Search
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          query={query}
          error={error}
          mensaje={mensaje}
          sort={sort}
          handleSort={handleSort}
        />
      </header>

      <main className="container mx-auto my-10 w-11/12 lg:w-full">
        {loading ? (
          <h2 className="text-center text-5xl text-red-800">Cargando ....</h2>
        ) : (
          <ListMovies
            hashMovies={hashMovies}
            movies={sortedMovies}
          />
        )}
      </main>
    </>
  );
}

export default App;
