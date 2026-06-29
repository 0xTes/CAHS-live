import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="flex flex-col md:flex-row gap-4 mb-8">

        <input
          type="text"
          placeholder="Search Hantu..."
          className="border p-3 rounded-lg flex-1"
        />

        <a
          href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          PRE-ORDER HANTU
        </a>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
}

export default Shop;