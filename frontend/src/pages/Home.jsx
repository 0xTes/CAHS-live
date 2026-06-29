import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* HERO */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-32 text-center">

          <h1 className="text-6xl font-bold">
            CAHS - Cisse AlHaqqu Hantu Services
          </h1>

          <h2 className="text-3xl mt-4">
            Cisse Alhaqqu Hantu Service
          </h2>

          <p className="max-w-2xl mx-auto mt-6">
            Premium Hantu made with quality,
            excellence and tradition.
          </p>

          <Link
            to="/shop"
            className="inline-block mt-8 bg-white text-green-700 px-8 py-4 rounded-lg font-bold"
          >
            Visit Shop
          </Link>

        </div>

      </section>

      {/* FEATURED */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-lg rounded-xl p-6">
            Qursiy-Kabeer
          </div>

          <div className="shadow-lg rounded-xl p-6">
            Suratul Yasin
          </div>

          <div className="shadow-lg rounded-xl p-6">
            Adhkar For Protection
          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-gray-100 dark:bg-gray-800 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose CAHS - Cisse AlHaqqu Hantu Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-bold mb-2">
                Premium Quality
              </h3>

              <p>
                Carefully prepared products.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Trusted Service
              </h3>

              <p>
                Reliable customer support.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-2">
                Fast Delivery
              </h3>

              <p>
                Timely order fulfillment.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="text-center py-24">

        <h2 className="text-4xl font-bold mb-6">
          Ready To Order?
        </h2>

        <Link
          to="/shop"
          className="bg-green-600 text-white px-8 py-4 rounded-lg"
        >
          Shop Now
        </Link>

      </section>
    </>
  );
}

export default Home;