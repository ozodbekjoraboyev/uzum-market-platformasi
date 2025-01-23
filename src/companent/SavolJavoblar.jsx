import React from "react";
import { Link } from "react-router";

function SavolJavoblar() {
  return (
    <div>
      <div>
        <h1>Ismingizni kiriting</h1>
      </div>
      <Link to="/">
        <button className=" bg-green-600 p-2 rounded-xl mt-5">qaytish</button>
      </Link>
    </div>
  );
}

export default SavolJavoblar;
