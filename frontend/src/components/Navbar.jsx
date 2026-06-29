import { Link } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          <Link
  to="/"
  className="flex items-center gap-3"
>
  <img
    src="/logo/cahs-logo.jpg"
    alt="CAHS Logo"
    className="h-12 w-12 rounded-full object-cover bg-white p-1"
  />

  <div>
    <h1 className="font-bold text-xl leading-tight">
      CAHS
    </h1>

    <p className="text-xs text-green-100">
      Cisse AlHaqqu Hantu Services
    </p>
  </div>
</Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <ThemeToggle />
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <ThemeToggle />
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;