import React from "react";
import uzum from "../../../assets/uzum.svg";
import katalog from "../../../assets/katalog.svg";
import katalogX from "../../../assets/katalogX.svg";

function Katalog({ madal, setMadal }) {
  return (
    <div>
      <div
        onClick={() => setMadal(!madal)}
        className="flex justify-between cursor-pointer"
      >
        <img src={uzum} alt="uzum" />
        <div className="ml-[30px] p-2 flex gap-1 bg-blue-200 w-[100px] rounded">
          <img
            className={`imgKatalog transition-transform duration-300 ${
              madal ? "rotate-180" : ""
            }`}
            src={madal ? katalogX : katalog}
            alt="uzum"
          />
          <p className="text-blue-600">katalog</p>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
