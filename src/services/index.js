const API_KEY='d8e950f7'

export const getDataMovies = async (query) => {
  if (query === "") return;
  try {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Response("Error al conectar con url");

    const { Search } = await res.json();
    return Search
  } catch (error) {
    console.log(error.message);
  }
};