import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router";
import axios from "axios";
import Narhlar from "./Narhlar";

function CardUI() {
  const [cardUI, setCardUi] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
      console.log(res.data);
      setCardUi(res.data);
    });
  }, []);

  console.log(id);
  if (!cardUI) {
    return <p>Yuklanmoqda....</p>;
  }
  return (
    <div className="flex items-center justify-between">
      <div>
        <div>
          <p className=" text-2xl font-bold mb-7">{cardUI.title}</p>
        </div>
        <div className="flex  items-center gap-5">
          <img
            className="w-[300px] h-[400px] snap-mandatory rounded-xl "
            src={cardUI.images}
            alt=""
          />
          <img
            className="w-[300px] h-[400px] snap-mandatory rounded-xl "
            src={cardUI.images}
            alt=""
          />
       
        </div>
        <Link to="/">
        <button className=" bg-green-600 p-2 rounded-xl mt-5">qaytish</button>
      </Link>
      </div>
        <Narhlar cardUI={cardUI} />
    </div>
  );
}

export default CardUI;
