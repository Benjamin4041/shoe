import Navbar from "./navbar";
import Shoebox from "./shoebox";
import Sizebox from "./sizebox";
import { FaRegStar } from "react-icons/fa";
import { ShoeNumContext } from "../context/shoeChangeContext";
import { useContext } from "react";
function Home() {
  let { currentShoe } = useContext(ShoeNumContext);

  // console.log(CurrentShoe);
  return (
    <div className=" w-screen h-screen relative">
      <Navbar />
      <section className="flex w-full h-full">
        <div className="bg-[#e48022] w-[50%] h-full">
          <h3 className="m-auto absolute font-extrabold text-[12.9rem] text-[#df6f19] opacity-75 translate-x-5 translate-y-28">
            BLAZER
          </h3>
          <img
            src={`./images/Nike-SB-Blazer-Mid-Cream-Gum-${currentShoe}.png`}
            className="max-w-full scale-110 translate-x-36 translate-y-52"
            alt=""
          />
          <div className="flex gap-3 translate-y-48 ml-7">
            <Shoebox
              imageURl={"./images/Nike-SB-Blazer-Mid-Cream-Gum-1.png"}
              shoeVal={1}
            />
            <Shoebox
              imageURl={"./images/Nike-SB-Blazer-Mid-Cream-Gum-2.png"}
              shoeVal={2}
            />
            <Shoebox
              imageURl={"./images/Nike-SB-Blazer-Mid-Cream-Gum-3.png"}
              shoeVal={3}
            />
            <Shoebox
              imageURl={"./images/Nike-SB-Blazer-Mid-Cream-Gum-4.png"}
              shoeVal={4}
            />
          </div>
        </div>
        <div className="flex w-[50%] justify-center items-center">
          <div className="border-2 w-[20.6rem]  mt-[3.8rem] rounded shadow p-6 px-3">
            <h1 className="text-[#e58020] font-extrabold text-3xl text-center">
              Nike SB Zoom
            </h1>
            <h3 className="text-[#4d5852] text-[2rem] font-medium text-center mb-5">
              Blazer Mid
            </h3>
            <div>
              <p>Size:</p>
              <span className="flex flex-wrap gap-5 w-48 justify-center translate-x-10 mb-7">
                <Sizebox disable={true} shoeSize={"4"} />
                <Sizebox disable={false} shoeSize={"5"} />
                <Sizebox disable={false} shoeSize={"6"} />
                <Sizebox disable={false} shoeSize={"7"} />
                <Sizebox disable={false} shoeSize={"8"} />
                <Sizebox disable={false} shoeSize={"9"} />
                <Sizebox disable={false} shoeSize={"10"} />
                <Sizebox disable={false} shoeSize={"11"} />
                <Sizebox disable={false} shoeSize={"12"} />
                <Sizebox disable={false} shoeSize={"13"} />
                <Sizebox disable={false} shoeSize={"14"} />
                <Sizebox disable={false} shoeSize={"15"} />
              </span>
            </div>
            <p className="mb-2 text-[0.8rem]">
              A heritage Nike shoe tailored to the needs of the modern
              skateboarder, the Nike SB Zoom Blazer Mid features Zoom Air
              cushioning and a flexible rubber outsole for great boardfeel and
              traction.
            </p>
            <p className=" text-[0.8rem]">
              <span className="font-semibold">Shown:</span> Photon
              Dust/White/White/Light Cream
            </p>
            <p className="mb-2 text-[0.8rem]">
              <span className="font-semibold">Style:</span> 864349-005
            </p>
            <button className="bg-[#459da1] p-3 text-white font-semibold rounded-lg w-full">
              Add to Cart
            </button>
            <div className="mt-6">
              <p className="text-center">reviews (27)</p>

              <span className="flex justify-center gap-6 mt-5">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
