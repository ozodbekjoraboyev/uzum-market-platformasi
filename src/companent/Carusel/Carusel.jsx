import React, { useState, useEffect } from "react";
import chapbutton from "../../assets/chap.svg";
import ongButton from "../../assets/ong.svg";

function Carusel() {
  const imglar = [
    "https://i.ytimg.com/vi/KLKoMpeO77U/maxresdefault.jpg",
    "https://images.uzum.uz/ct8qj9viub3d1eokido0/main_page_banner.jpg",
    "https://i.ytimg.com/vi/G4RwQTU4gfw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD0GcdwxvFH5s95DUIbSUGLhzGK6w",
    "https://daryo.uz/static/2023/06/Reklama%20%2006/image_2023-06-13_16-07-42.png",
    "https://www.gazeta.uz/media/img/2023/05/7VIzEp16847593932600_l.jpg",
    "https://api.uznews.uz/storage/uploads/posts/images/75885/inner/N00SB2C5ON.jpg",
  ];

  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarusel((prevCarusel) => (prevCarusel + 1) % imglar.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imglar.length]);

  function next() {
    setCarusel((prev) => (prev + 1) % imglar.length);
  }

  function ext() {
    setCarusel((prev) => (prev - 1 + imglar.length) % imglar.length);
  }

  return (
    <div className="m-auto container">
      <div className="flex items-center ">
        <button
          onClick={ext}
          className="absolute left-24 border border-blue-100 shadow-md rounded-full p-3 active:translate-x-1 transition"
        >
          <img className="w-3" src={chapbutton} alt="Chapga o'tish" />
        </button>

        <img
          className="m-auto w-[1400px] h-[500px] rounded-lg shadow-lg transition-transform duration-700"
          src={imglar[carusel]}
          alt="Carusel rasmi"
        />

        <button
          onClick={next}
          className="absolute right-24 border p-3 shadow-md rounded-full active:translate-x-1 transition"
        >
          <img className=" w-3" src={ongButton} alt="O'ngga o'tish" />
        </button>
      </div>

      <div className=" text-center container flex justify-center gap-2 absolute m-auto ">
        {imglar.map((item, index) => (
          <img
            key={index}
            className={`w-5 h-5 rounded-full cursor-pointer border-2  transition-transform -mt-16  ${
              carusel === index
                ? "border-blue-500 rounded-full  scale-110"
                : "border-gray-300 rounded-full hover:scale-105"
            }`}
            src={item}
            alt="Miniatura"
            onClick={() => setCarusel(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carusel;
