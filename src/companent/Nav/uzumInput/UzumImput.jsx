import React, { useState } from "react";
import Katalog from "./Katalog";
import Input from "./Input";
import Krish from "./Krish";
import Dokon from "./Dokon";
import Madal from "./Madal";
import InputMadal from "./InputMada";

function UzumImput() {
  const [madal, setMadal] = useState(false); 

  return (
    <div>
      <div className="flex  justify-between items-center mt-5">
        <Katalog madal={madal} setMadal={setMadal} />
        <Input setMadal={setMadal} />
        <Krish />
      </div>
      <Dokon />
      {madal && <Madal madal={madal} setMadal={setMadal} />}
      {madal && <InputMadal madal={madal} setMadal={setMadal} />}
    </div>
  );
}

export default UzumImput;
