import React from "react";
import sertsaRangsiz from "../../assets/sertsaRangsiz.svg";
import { Link } from "react-router";

function Narhlar({ cardUI }) {
  return (
    <div className=" border border-black rounded-md w-[400px] mb-5 p-5">
      <div>

        <div className="flex items-center justify-start gap-3 mb-10 ">
          <h2 className=" font-bold text-2xl"> {cardUI.price} 990 so'm</h2>
          <del className=" font-semibold"> $ 55 000 </del>
          <p className=" px-4  bg-violet-700 pt-1 rounded-full text-white">
            -35 %
          </p>
        </div>
        <p className=" px-6 bg-violet-700 w-32 p-2 rounded-full text-white">
          super narx
        </p>
      </div>
      <div className=" mb-5  flex items-center bg-slate-300 p-3 mt-4 rounded">
        <p className=" px-6 bg-yellow-400 w-52 p-2 rounded-full text-white">
          oyiga 2 542 so'mdaan
        </p>
        <p className=" opacity-50">mudatli to'lo'v</p>
      </div>
      <div className=" mb-5  flex justify-between">
        <div className="flex w-[400px] items-center mt-4 bg-slate-300 p-3 rounded">
          <p>1 klikda harid qilish</p>
        </div>
        <div className="flex  items-center w-10 mt-4 bg-slate-300 p-3 rounded">
          <img src={sertsaRangsiz} alt="" />
        </div>
      </div>
      <div className="  bg-violet-800 p-4 rounded mt-4 text-center text-white">
        <p>Savatga qo'shil;ish</p>
      </div>
      <div>
        <div className=" flex gap-4 p-2 mt-5">
          <img
            className=" w-6"
            src="https://uzum.uz/static/img/icons/checkmark.svg"
            alt=""
          />
          <p>10 dona xarid qilish mumkin</p>
        </div>
        <div className=" flex gap-4 p-2">
          <img
            className=" w-6"
            src="https://ke-images.servicecdn.ru/static/product-action/badge_bought.png"
            alt=""
          />
          <p>Bu haftada 6032 kishi sotib oldi</p>
        </div>
      </div>
    </div>
  );
}

export default Narhlar;
