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
      <div className=" absolute">
        <div
          className={`${
            madal ? " opacity-50 visible" : "opacity-0 invisible"
          } fixed inset-0 bg-black transition-opacity duration-500`}
          onClick={() => setMadal(false)}
        ></div>

        <div
          className={`${
            showModal ? "opacity-100 visible  mt-[150px]" : "opacity-0 invisible"
          } bg-slate-300 m-auto fixed inset-0 max-w-md h-[70vh] rounded-xl shadow-lg transition-all duration-500 ease-in-out p-4`}
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
