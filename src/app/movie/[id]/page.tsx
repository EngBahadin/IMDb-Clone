import Image from "next/image";
import React from "react";

type MoviePageProps = {
  params: { id: string };
};
async function MoviePage({ params }: MoviePageProps) {
  const { id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt={movie.title||''}
          width={500}
          height={300}
          className="rounded-lg object-contain"
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold ">
            {movie.title || movie.name}
          </h2>
          <p className="text-md mb-3">{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold  mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_data}
          </p>
          <p className="mb-3 ">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
