const Search = ({
  handleSubmit,
  handleChange,
  handleSort,
  sort,
  query,
  error,
  mensaje,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-10 w-5/6 "
    >
      <div className="flex flex-col gap-1 lg:items-center lg:justify-center">
        <label
          className="font-bold text-gray-100"
          htmlFor="search"
        >
          Search Movie
        </label>
        <input
          className={`w-96 rounded-md py-1 pl-5 outline-none ${
            error ? "border-[2px] border-red-600" : ""
          }`}
          type="text"
          placeholder="avengers , rambo, guardians"
          onChange={handleChange}
          value={query}
        />
        {error && (
          <small className="font-medium italic text-red-600">{mensaje}</small>
        )}
      </div>
      <div className="flex items-center justify-center gap-4">
        <input
          className="mt-2 rounded-md bg-gray-900 px-4 py-1 font-medium capitalize text-white hover:cursor-pointer hover:bg-gray-900/80 transition-colors"
          type="submit"
          value="buscar"
        />
        <label
          className="mt-2 rounded-md bg-red-700 px-3 py-1 text-white font-medium hover:cursor-pointer hover:bg-red-700/80 transition-colors"
          htmlFor="sorted"
        >
          {sort ? "Default" : "Ordenar"}
        </label>
        <input
          className="hidden"
          type="checkbox"
          id="sorted"
          value={sort}
          onChange={handleSort}
        />
      </div>
    </form>
  );
};

export default Search;
