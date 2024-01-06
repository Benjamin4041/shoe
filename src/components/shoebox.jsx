import React, { useContext } from "react";
import { ShoeNumContext } from "../context/shoeChangeContext";

export default function Shoebox({ imageURl, shoeVal }) {
  let { currentShoe, setCurrentShoe } = useContext(ShoeNumContext);
  let changeImage = () => {
    setCurrentShoe(currentShoe=shoeVal);
    console.log(currentShoe);
  };
  return (
    <div
      className="border-2 hover:bg-[#df6f19] hover:border-[#df6f19] border-[#e1741d] w-fit p-5 rounded cursor-pointer "
      onClick={changeImage}
    >
      <img src={imageURl} alt="" className="w-24" />
    </div>
  );
}
