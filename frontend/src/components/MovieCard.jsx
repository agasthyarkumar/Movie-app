export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{movie.genre}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
          Book Ticket
        </button>
      </div>
    </div>
  );
}
