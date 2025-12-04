const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language} }) => {
  return (
    <div className="movie-card text-white">
        {/* <p className='text-white'>{title}</p> */}
        <img src={[poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png']} alt={`${title} Poster`} />
        <div className="mt-4">
            <h3>{title}</h3>
            <div className="content flex items-center gap-2 text-sm text-gray-400">
                <div className="rating flex items-center gap-1 ">
                    <img src="star.svg" alt="star icon" className="w-4 h-4"/>
                    <p className="text-white">{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
                </div>
                <span>•</span>
                <p className="lang">{original_language}</p>

                <span>•</span>
                <p className="year">
                    {release_date ? release_date.split('-')[0] : 'N/A'}
                </p>
            </div>
        </div>
    </div>
  );
};
export default MovieCard;
