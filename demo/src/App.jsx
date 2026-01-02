import React from "react";
import Image from "./Image";
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card";

const App = () => {
  return (
    <> 
      <Nav />
      {/* hero part */}
      <Hero />
      {/* hero part over */}
      {/* card section */}
      <Card />

      {/* Explore */}
      <div class="mx-25 my-15">
        <h1 className="text-3xl text-gray-500 font-bold">Explore</h1>
        <div class="flex justify-between gap-10 h-auto w-full mt-7 ">
          <div>
            <div className="border-t-1 border-r-1 border-l-1  rounded-tl-sm rounded-tr-2 border-dotted  flex flex-col items-center  p-5 pt-8 ">
              <img src="https://www.dominos.co.in/assets/menu@2x.png" alt="menu img" className="h-20 w-13 "></img>
              <p className="font-bold text-xl text-[rgb(43,69,71)] mt-3">OUR MENU</p>
              <p className="mt-5 text-[#2b4547] text-lg">Explore the range of delicious Pizzas,</p>
              <p className="text-[#2b4547] text-lg mt-2">delivered in 30mintues!</p>
            </div>
            <div className="border-1 border-black border-dotted p-5 rounded-bl-sm rounded-br-sm flex justify-center font-bold text-md text-red-600">DISCOVER PIZZA</div>
          </div>
          <div>
            <div className="border-t-1 border-r-1 border-l-1  rounded-tl-sm rounded-tr-2 border-dotted  flex flex-col items-center  p-5 pt-8 ">
              <img src="https://www.dominos.co.in/assets/store@2x.png" alt="menu img" className="h-20 w-13 "></img>
              <p className="font-bold text-xl text-[rgb(43,69,71)] mt-3">NEARBY STORE</p>
              <p className="mt-5 text-[#2b4547] text-lg">Find the Domino's Pizza restaurant near </p>
              <p className="text-[#2b4547] text-lg mt-2">you</p>
            </div>
            <div className="border-1 border-black border-dotted p-5 rounded-bl-sm rounded-br-sm flex justify-center font-bold text-md text-red-600">FIND DOMINO'S STORE</div>
          </div>
          <div>
            <div className="border-t-1 border-r-1 border-l-1  rounded-tl-sm rounded-tr-2 border-dotted  flex flex-col items-center  p-5 pt-8 ">
              <img src="https://www.dominos.co.in/assets/birthday@2x.png" alt="menu img" className="h-20 w-13 "></img>
              <p className="font-bold text-xl text-[rgb(43,69,71)] mt-3">BIRTHDAY PARTY</p>
              <p className="mt-5 text-[#2b4547] text-lg">Explore the range of delicious Pizzas,</p>
              <p className="text-[#2b4547] text-lg mt-2">delivered in 30mintues!</p>
            </div>
            <div className="border-1 border-black border-dotted p-5 rounded-bl-sm rounded-br-sm flex justify-center font-bold text-md text-red-600">BOOK NOW</div>
          </div>
          <div>
            <div className="border-t-1 border-r-1 border-l-1  rounded-tl-sm rounded-tr-2 border-dotted  flex flex-col items-center  p-5 pt-8 ">
              <img src="https://www.dominos.co.in/assets/catering@2x.png" alt="menu img" className="h-20 w-13 "></img>
              <p className="font-bold text-xl text-[rgb(43,69,71)] mt-3">CATERING</p>
              <p className="mt-5 text-[#2b4547] text-lg">Explore the range of delicious Pizzas,</p>
              <p className="text-[#2b4547] text-lg mt-2">delivered in 30mintues!</p>
            </div>
            <div className="border-1 border-black border-dotted p-5 rounded-bl-sm rounded-br-sm flex justify-center font-bold text-md text-red-600">BOOK NOW</div>
          </div>

        </div>
      {/* Explore over */}
      {/* phone section */}
      </div>
      <div className="h-150 bg-gray-300 ">
        <img src="https://www.dominos.co.in/assets/new_app_img@2x.png" h-150></img>

      </div>
    </>
  );
};

export default App;
