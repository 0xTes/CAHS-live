import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Complete Qur'an",
    price: "9000",
    image: "/images/products/Complete Qur'an.jpg",
  },
  {
    id: 2,
    name: "Qursiy-Kabeer",
    price: "2500",
    image: "/images/products/Qursiy-Kabeer.jpg",
  },
  {
    id: 3,
    name: "Seffi & Mugni",
    price: "450",
    image: "/images/products/Seffi & Mugni.jpg",
  },
  {
    id: 4,
    name: "Suratul-Kahf",
    price: "300",
    image: "/images/products/Suratul-Kahf.jpg",
  },
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