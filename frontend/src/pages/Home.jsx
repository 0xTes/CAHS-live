import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-32 text-center">

        <h1 className="text-6xl font-bold mb-6">
          CAHS
        </h1>

        <h2 className="text-3xl mb-8">
          Cisse AlHaqqu Hantu Services
        </h2>

        <p className="max-w-2xl mx-auto mb-10">
          Premium quality Hantu delivered with
          excellence and reliability.
        </p>

        <Link
          to="/shop"
          className="bg-white text-green-700 px-8 py-4 rounded-lg font-bold"
        >
          Visit Shop
        </Link>

      </div>

    </section>
  );
}

export default Home;