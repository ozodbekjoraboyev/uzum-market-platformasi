import React, { useState } from "react";

function Dokon() {
  const [navDokon, setNavDokon] = useState([
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
      Elektronika: "Elektronika",
      Maishiy: "Maishiy texnika",
      Kiyim: "Kiyim",
      Poyabzallar: "Poyabzallar",
    },
  ]);
  return (
    <div className=" flex  justify-between items-center mt-5 mb-5">
      {navDokon.map((items, index) => (
        <div key={index} className=" flex">
          <div className=" flex items-center justify-between gap-2">
            <img className=" w-4" src={items.foyiz} alt="" />
            <p className="animated-text">{items.savdo}</p>
            <p className="animated-text pr-5">{items.Elektronika}</p>
            <p className="animated-text pr-5">{items.Maishiy}</p>
            <p className="animated-text pr-5">{items.Kiyim}</p>
            <p className="animated-text pr-5">{items.Poyabzallar}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dokon;
