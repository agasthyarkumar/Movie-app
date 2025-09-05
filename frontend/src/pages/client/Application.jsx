import Navbar from "../../components/Navbar";
import MovieCard from "../../components/MovieCard";
import movies from "../../utils/dummyData";

export default function Application() {
  return (
    <div>
      <Navbar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
