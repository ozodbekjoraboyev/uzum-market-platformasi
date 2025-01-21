// import React, { useState, useEffect } from "react";
// import sertsaRangsiz from "../../../assets/sertsaRangsiz.svg";
// import sertsaRangli from "../../../assets/sertsaRangli.svg";
// import bagSHop from "../../../assets/bagSHop.svg";

// function InputMadal() {
//   const [inputCard, setInputCard] = useState([]);
//   const [sertsa, setSertsa] = useState({});

//   const inputFetch = () => {
//     fetch("https://api.escuelajs.co/api/v1/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setInputCard(data);
//       })
//       .catch((error) => console.error("Hatolik yuz berdi:", error));
//   };

//   useEffect(() => {
//     inputFetch();
//   }, []);


//   const toggleSertsa = (id) => {
//     setSertsa((prevSertsa) => ({
//       ...prevSertsa,
//       [id]: !prevSertsa[id], 
//     }));
//   };

//   return (
//     <>
//       <div className=" ">
//         <div className="w-[620px] h-[300px] m-auto  overflow-auto  ">
//           <div className="inputCardMadal ">
//             {inputCard.map((item) => (
//               <div className="w-[195px] relative p-2 " key={item.id}>
//                 <img
//                   onClick={() => toggleSertsa(item.id)}
//                   className="w-4 absolute ml-[155px]  pt-2 cursor-pointer"
//                   src={sertsa[item.id] ? sertsaRangli : sertsaRangsiz}
//                   alt="Like button"
//                 />
//                 {item.images && item.images.length > 1 ? (
//                   <img
//                     className="w-[300px] h-[220px] rounded-b-md"
//                     src={item.images}
//                     alt={item.title}
//                   />
//                 ) : (
//                   <img
//                     className="w-[300px] h-[220px] rounded-b-md"
//                     src="https://via.placeholder.com/300"
//                     alt="No image available"
//                   />
//                 )}
//                 <p className="mb-4">{item.title}</p>
//                 <div className="flex items-center justify-between">
//                   <p className="text-black mt-2">${item.price}</p>
//                   <button>
//                     <img className="w-4" src={bagSHop} alt="Add to Cart" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default InputMadal;
import React, { useState, useEffect } from "react";
import sertsaRangsiz from "../../../assets/sertsaRangsiz.svg";
import sertsaRangli from "../../../assets/sertsaRangli.svg";
import bagSHop from "../../../assets/bagSHop.svg";

function InputMadal() {
  const [inputCard, setInputCard] = useState([]);
  const [sertsa, setSertsa] = useState({});

  const inputFetch = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setInputCard(data);
      })
      .catch((error) => console.error("Hatolik yuz berdi:", error));
  };

  useEffect(() => {
    inputFetch();
  }, []);


  const toggleSertsa = (id) => {
    setSertsa((prevSertsa) => ({
      ...prevSertsa,
      [id]: !prevSertsa[id], 
    }));
  };

  return (
    <>
      <div className="w-[620px] h-[300px] m-auto overflow-auto z-50">
        {/* InputMadal content */}
        <div className="inputCardMadal">
          {inputCard.map((item) => (
            <div className="w-[195px] relative p-2" key={item.id}>
              <img
                onClick={() => toggleSertsa(item.id)}
                className="w-4 absolute ml-[155px] pt-2 cursor-pointer"
                src={sertsa[item.id] ? sertsaRangli : sertsaRangsiz}
                alt="Like button"
              />
              {item.images && item.images.length > 1 ? (
                <img
                  className="w-[300px] h-[220px] rounded-b-md"
                  src={item.images}
                  alt={item.title}
                />
              ) : (
                <img
                  className="w-[300px] h-[220px] rounded-b-md"
                  src="https://via.placeholder.com/300"
                  alt="No image available"
                />
              )}
              <p className="mb-4">{item.title}</p>
              <div className="flex items-center justify-between">
                <p className="text-black mt-2">${item.price}</p>
                <button>
                  <img className="w-4" src={bagSHop} alt="Add to Cart" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InputMadal;
