import React from "react";
import { Movie } from "./Results";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
type movieItemProps = {
  movieItem: Movie;
};
function Card({ movieItem }: movieItemProps) {
  return (
    <div className="group cursor-pointer dark:bg-[#121212] sm:shadow-md rounded-lg  sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${movieItem.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movieItem.poster_path || movieItem.backdrop_path
          }`}
          alt={movieItem.original_title || ""}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-base">{movieItem.overview}</p>
          <h2 className="text-lg font-bold truncate hover:underline">
            {movieItem.title || movieItem.name}
          </h2>
          <p className="flex items-center">
            {movieItem.release_date || movieItem.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {movieItem.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
