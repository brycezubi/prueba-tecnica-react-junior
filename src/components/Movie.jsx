const Movie = ({Poster , Title , Year}) => {
  return (
    <article>
      <img
        className="mx-auto"
        src={Poster}
        alt={`reference ${Title}`}
      />
      <div className="pt-4 text-center text-white">
        <h2 className="font-bold">{Title}</h2>
        <p>{Year}</p>
      </div>
    </article>
  );
};

export default Movie;
