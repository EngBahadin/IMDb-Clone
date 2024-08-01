import React from "react";
import Card from "./Card";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?:string;
  first_air_date?:string;
}

type MovieArray = {
  results: Movie[];
};

function Results({ results }: MovieArray) {
  return (
    <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl mx-auto py-4 w-full">
      {results.map((movieItem) => (
        <Card movieItem={movieItem} />
      ))}
     
    </div>
  );
}

export default Results;
