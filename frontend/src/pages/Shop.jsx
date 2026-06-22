import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Premium Hantu",
    price: "5000",
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
  },
  {
    id: 2,
    name: "Classic Hantu",
    price: "3500",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  },
  {
    id: 3,
    name: "Special Hantu",
    price: "7000",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
  }
];

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