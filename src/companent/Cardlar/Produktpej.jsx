import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function CardUI() {
  const [cardUI, setCardUi] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        setCardUi(data);
      })
      .catch((error) => {
        console.log("Hatolika duch keldik User!");
      });
  }, []);
  console.log(id);
  if (!cardUI) {
    return <p>Yuklanmoqda....</p>;
  }
  return (
    <div>
      <div className="flex items-center gap-">
        <img className="w-52 rounded-xl" src={cardUI.images} alt="" />
      <div className="text-2xl font-sans">
      <p>{cardUI.title}</p>
      <p>{cardUI.description}</p>
      </div>
      </div>
   <Link to="/">
   <button className=" bg-green-600 p-2 rounded-xl mt-5">
        qaytish
      </button>
   </Link>
    </div>
  );
}

export default CardUI;
