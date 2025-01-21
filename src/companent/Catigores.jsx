import { useEffect, useState } from "react";
import { data } from "react-router";
function Category() {
    const [category, setCategory] = useState();
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/categories")
        .then((res) => res.json())
        .then((data) => setCategory(data));
        console.log(category);
    }, []);
    if (!category) {
      return (
        <div>
          <p>yuklanmoqda...</p>
        </div>
      );
    }
  return (
    <div  className="grid grid-cols-5">
      {category.map((item) => (
        <div key={item.id}>
          <div >
            <img
              className="w-[200px] rounded-xl h-[250px]"
              src={item.image}
              alt=""
            />
            <p>{item.name}</p>
 
          </div>
        </div>
      ))}
    </div>
  );
}
export default Category;
