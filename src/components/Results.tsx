import { IMovieInfo } from '@/types/types';
import Card from './Card';

interface IResultsProps {
  results: IMovieInfo[];
}

export default function Results({ results }: IResultsProps) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results.map((result: IMovieInfo) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
