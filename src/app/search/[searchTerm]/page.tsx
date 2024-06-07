import Results from '@/components/Results';

interface ISearchPageProps {
  params: {
    searchTerm: string;
  };
}

export default async function SearchPage({ params }: ISearchPageProps) {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `http://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}
    &language=en-US&page=1&include_adult=false`,
  );

  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 ? (
        <h1 className="text-center pt-6">No Results find</h1>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
