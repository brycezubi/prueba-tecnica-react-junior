import { useCallback, useRef, useState } from "react";
import { getDataMovies } from "../services";

export function useMovie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState(false);
  const movie = useRef("");

  const getMovies = async (query) => {
    if (query === "") return;

    if (movie.current === query) return;

    try {
      setLoading(true);
      const peliculas = await getDataMovies(query);
      setMovies(peliculas);
      movie.current = query;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const hashMovies = movies?.length > 0;

  const sortedMovies = useCallback(
    sort ? [...movies].sort((a, b) => a.Title.localeCompare(b.Title)) : movies,
    [sort, movies]
  );

  return { getMovies, hashMovies, loading, handleSort, sort, sortedMovies };
}
