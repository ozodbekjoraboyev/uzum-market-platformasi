import React, { useEffect, useState } from "react";
import bagSHop from "../../assets/bagSHop.svg";
import sertsaRangsiz from "../../assets/sertsaRangsiz.svg";
import sertsaRangli from "../../assets/sertsaRangli.svg";
import { Link } from "react-router";

function Card() {
  const [card, setCrd] = useState(false);
  const [likes, setLikes] = useState({});


  const fetchCard = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((respons) => respons.json())
      .then((data) => {
        console.log(data);
        setCrd(data);
        const initialLikes = data.reduce((acc, item) => {
          acc[item.id] = false;
          return acc;
        }, {});
        setLikes(initialLikes);
      })
      .catch((error) => console.log("Hatolika duch keldik User!", error));
  };

  useEffect(() => {
    fetchCard();
  }, []);

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="card_grid">
      {card.length > 0 ? (
        card.map((item) => (
          <div key={item.id} className="p-4 m-2 rounded items-center">
            <button
              className=" absolute "
              onClick={() => {
                const Delet = card.filter((filterItme) => {
                  return filterItme.id !== item.id;
                });
                setCrd(Delet);
              }}
            >
              ❌
            </button>
            <img
              onClick={() => toggleLike(item.id)}
              className="w-5 absolute cursor-pointer ml-[200px] pt-4"
              src={likes[item.id] ? sertsaRangli : sertsaRangsiz}
              alt="Like"
            />

            <Link to={`cardui/${item.id}`}>
              <img
                className="w-[232px] h-[309px] rounded"
                src={item.images}
                alt={item.title}
              />
            </Link>
            <h2 className="text-black text-lg">{item.title}</h2>
            <p>{item.updatedAt}</p>

            <div className="flex items-center justify-between">
              <p className="text-black mt-2">${item.price}</p>
              <button>
                <img className="w-4" src={bagSHop} alt="Add to Cart" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="flex text-3xl container m-auto">Biroz kuting...</p>
      )}
    </div>
  );
}

export default Card;
