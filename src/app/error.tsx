"use client";

import { useEffect } from "react";

type errorProps = {
  error: Error | null;
  reset: () => void;
};
function error({ error, reset }: errorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        onClick={() => reset()}
        className="mt-4 bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded"
      >
        Try Again
      </button>
    </div>
  );
}

export default error;
