import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center py-32">
      <h1 className="text-6xl font-bold text-green-600">
        404
      </h1>

      <p className="mt-4">
        Page not found
      </p>

      <Link
        to="/"
        className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;