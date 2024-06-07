'use client';

import { useEffect } from 'react';

interface IErrorProps {
  error: string;
  reset: () => void;
}

export default function error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try agian later</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
