function ProductCard({ product }) {
  return (
    <div className="rounded-xl shadow-lg overflow-hidden bg-white dark:bg-gray-800">

      <img
        src={product.image}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="p-4">

        <h3 className="font-bold text-lg">
          {product.name}
        </h3>

        <p className="text-green-600 font-semibold mt-2">
          ₦{product.price}
        </p>

      </div>
    </div>
  );
}

export default ProductCard;