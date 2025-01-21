import React, { useState } from "react";
import lokationCentr from "../../assets/lokation.svg";
import bayrog from "../../assets/bayrog.svg";
import UzumImput from "./uzumInput/UzumImput";
import ruski from "../../assets/ruski.png";
import { Link } from "react-router";
import SavolJavoblar from "../SavolJavoblar";

function Nav() {
  const [navbarHeader] = useState([
    {
      citi: "Shahar: Toshkent",
      lokation: "Topshirish punktlari",
      buyurtma: "Buyurtmangizni 1 kunda bepul yetkazib beramiz!",
      catigore: "carigores",
      savolar: "Savol-javoblar",
      yetkazish: "Buyurtmalarim",
      tilUz: "О'zbekcha",
      tilRu: "Русский",
    },
  ]);
  const [lokation, setLokation] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("О'zbekcha");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLokation(false);
  };

  return (
    <div>
      <header>
        <div className="bg-slate-300 p-3">
          {navbarHeader.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-4">
                <img
                  className="w-3 cursor-pointer"
                  src={lokationCentr}
                  alt="Location Icon"
                />
                <p>{item.citi}</p>
                <p>{item.lokation}</p>
              </div>

              <p className="opacity-50">{item.buyurtma}</p>
              <div className="flex gap-2 items-center relative">
                <Link to="/catigores">
                <p>{item.catigore}</p>
                </Link>
                <Link to="/savoljavoblar">
                  <p>{item.savolar}</p>
                </Link>
                <p>{item.yetkazish}</p>

                <div
                  onClick={() => setLokation(!lokation)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <img
                    src={selectedLanguage === "О'zbekcha" ? bayrog : ruski}
                    alt="Flag"
                    className="w-5 rounded-full"
                  />
                  <p>{selectedLanguage}</p>
                </div>

                {lokation && (
                  <div className="absolute top-8 right-0 bg-white shadow-md p-2 rounded-md">
                    <div
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2"
                      onClick={() => handleLanguageChange(item.tilUz)}
                    >
                      <img className="w-5 rounded-full" src={bayrog} alt="" />
                      <p>{item.tilUz}</p>
                    </div>
                    <div
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2"
                      onClick={() => handleLanguageChange(item.tilRu)}
                    >
                      <img className="w-5 rounded-full" src={ruski} alt="" />
                      <p>{item.tilRu}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </header>
      <UzumImput />

    </div>
  );
}

export default Nav;
