import React, { useEffect, useState } from "react";

function Madal({ madal, setMadal }) {
  const [showModal, setShowModal] = useState(false);
  const katalogMadal = [
    {
      foyiz: "https://static.uzum.uz/fast_categories/Ras2025.png",
      savdo: "Qishki savdo",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/%20vyg.png",
      savdo: "Har kuni Foyda",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Licv.png",
      savdo: "Tugatish",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Haftalik tavomlar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Elekteonika",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "kiyim",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "poyabzal",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Akeesuarlar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Haftalik tavomlar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Haftalik tavomlar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "go'zalik va pardoz",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Salomatlik",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Uy ro'zgor buyumlari",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "qurilish va tamirlash",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Aftamabilar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Aftamabilar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Aftamabilar",
    },
    {
      foyiz: "https://static.uzum.uz/fast_categories/Topsales.png",
      savdo: "Aftamabilar",
    },
  ];

  useEffect(() => {
    if (madal) {
      setShowModal(true);
    } else {
      setTimeout(() => setShowModal(false), 500);
    }
  }, [madal]);

  return (
    <>
      <div className="absolute overflow-auto z-50">

        <div
          className={`${
            madal ? "opacity-50 visible" : "opacity-0 invisible"
          } fixed inset-0 bg-black transition-opacityz-50`}
          onClick={() => setMadal(false)}
        ></div>


        <div
          className={`${
            showModal ? "opacity-100 visible mt-[150px]" : "opacity-0 invisible"
          } bg-slate-300 m-auto fixed inset-0 h-[80vh]  rounded-xl shadow-lg transition-all duration-500 ease-in-out p-4 z-50 overflow-auto `}
        >
          {katalogMadal.map((item, index) => (
            <div
              key={index}
              className="flex relative p-2 items-center gap-2 cursor-pointer hover:bg-gray-100 rounded-md"
            >
              <img className="w-5" src={item.foyiz} alt={item.savdo} />
              <p>{item.savdo}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Madal;
