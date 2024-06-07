import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 justify-center gap-6">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
