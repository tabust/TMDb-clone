'use client';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function SearchBox() {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button
        className="text-amber-600 disabled:text-gray-400 disabled:cursor-not-allowed"
        disabled={searchValue === ''}
      >
        Search
      </button>
    </form>
  );
}
