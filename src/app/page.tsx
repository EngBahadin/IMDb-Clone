import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
type searchParams = {
  searchParams: {
    genre: string;
  };
};
async function Home({ searchParams }: searchParams) {
  
 // const [page, setPage] = useState(0)

  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return (
    <>
      <div>
        <Results results={results} />
        <div className="flex justify-center mb-4">
          <button className="mx-auto  text-amber-600 w-fit u">Next page</button>
        </div>
      </div>
    </>
  );
}

export default Home;
