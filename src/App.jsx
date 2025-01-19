import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./companent/Nav/Nav";
import Carusel from "./companent/Carusel/Carusel";
import Card from "./companent/Cardlar/Card";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadContent = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 1000);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleLoadContent();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <svg
            className="animate-spin h-12 w-12 text-blue-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
            ></path>
          </svg>
          <p className="ml-4 text-xl font-semibold text-gray-800">
            Yuklanmoqda...
          </p>
        </div>
      ) : showContent ? (
        <div className="w-[1440px] border border-black m-auto p-3">
          <Nav />
          <Carusel />
          <Card />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-lg font-medium mb-4">
            Kontent yuklanmadi. Iltimos, qayta urinib ko'ring.
          </p>
          <button
            className="bg-indigo-800  font-bold py-2 px-6 rounded"
            onClick={handleLoadContent}
          >
            Kontentni yuklash
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
