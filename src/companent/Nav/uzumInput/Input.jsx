
// import React, { useState } from "react";
// import search from "../../../assets/search.svg";
// import InputMadal from "./InputMadal";

// function Input() {
//   const [madal, setMadal] = useState(false); // Modal holati
//   const [inputValue, setInputValue] = useState(""); // Kiritilgan qiymat

//   return (
//     <>
//       {/* Qidiruv maydoni */}
//       <div className="flex">
//         <input
//           onClick={() => setMadal(true)} // Modalni ochish
//           onChange={(e) => setInputValue(e.currentTarget.value)}
//           className="w-[500px] border border-black p-2 rounded-l-md rounded-r-none"
//           type="text"
//           placeholder="Search..."
//         />
//         <button className="bg-slate-400 rounded-r-md p-3">
//           <img className="w-5" src={search} alt="Search Icon" />
//         </button>
//       </div>

//       {/* Modal */}
//       {madal && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-5 rounded-md shadow-lg w-[640px]">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold">Search Results</h2>
//               <button
//                 onClick={() => setMadal(false)} // Modalni yopish
//                 className="text-red-500 font-bold"
//               >
//                 Close
//               </button>
//             </div>
//             {/* Modal ichidagi komponent */}
//             <InputMadal />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Input;
import React, { useState } from "react";
import search from "../../../assets/search.svg";
import InputMadal from "./InputMada";

function Input() {
  const [madal, setMadal] = useState(false);
  const [inputValue, setInputValue] = useState(""); 

  return (
    <>
      <div className="flex ">
        <input
          onClick={() => setMadal(true)} 
          onChange={(e) => setInputValue(e.currentTarget.value)}
          className="w-[500px] border border-black p-2 rounded-l-md rounded-r-none"
          type="text"
          placeholder="Search..."
        />
        <button className="bg-slate-400 rounded-r-md p-3">
          <img className="w-5" src={search} alt="Search Icon" />
        </button>
      </div>

      {madal && (
        <div className="fixed inset-0 pt-52 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-md shadow-lg w-[640px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Search Results</h2>
              <button
                onClick={() => setMadal(false)} 
                className="text-red-500 font-bold"
              >
                Close
              </button>
            </div>
       
            <InputMadal />
          </div>
        </div>
      )}
    </>
  );
}

export default Input;
