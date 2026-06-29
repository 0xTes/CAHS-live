import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;