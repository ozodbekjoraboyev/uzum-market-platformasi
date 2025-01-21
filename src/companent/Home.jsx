import { useEffect, useState } from "react";
import Carusel from "./Carusel/Carusel";
import Card from "./Cardlar/Card";
import Nav from "./Nav/Nav";

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadContent = () => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 100);
    return () => clearTimeout(timer);
  };

  useEffect(() => {
    handleLoadContent();
  }, []);

  return (
    <div className="Home">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <svg className="animate-spin h-10 w-10 mr-3" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="indigo"
              strokeWidth="4"
              fill="none"
              strokeDasharray="80"
              strokeDashoffset="30"
            />
          </svg>
        </div>
      ) : showContent ? (
        <div>
          
          <Carusel />
          <Card />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <p className="text-lg font-medium mb-4">
            Kontent yuklanmadi. Iltimos, qayta urinib ko'ring.
          </p>
          <button
            className="bg-indigo-800 font-bold py-2 px-6 rounded"
            onClick={handleLoadContent}
          >
            Kontentni yuklash
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
