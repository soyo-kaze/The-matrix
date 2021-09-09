// import logo from "./logo.svg";
import { useState } from "react";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import light from "../assets/dark.png";
import dark from "../assets/light.png";
import "../styles/App.css";

function App() {
  return (
    <>
      <div className="h-screen flex items-center flex-col justify-center">
        <p className="font-mono absolute top-24 text-3xl mb-14 text-gray-600 ">
          The Choice is yours
        </p>
        <div className="flex w-full items-center justify-center pt-20 animate-opa space-x-36">
          <span className=" flex items-center justify-center h-80 mt-0 group hover:-mt-4 duration-500 cursor-pointer">
            <img
              className="pills absolute z-0 opacity-100 group-hover:opacity-0 duration-500"
              src={dark}
              alt="shadow"
            />
            <img
              className="pills absolute z-0 opacity-0 group-hover:opacity-100 duration-500"
              src={light}
              alt="shadow"
            />
            <img className="pills absolute z-10" src={red} alt="red_pill" />
          </span>
          <span className="flex items-center justify-center h-80 mt-0 group hover:-mt-4  duration-500 cursor-pointer">
            <img
              className="pills absolute z-0 opacity-100 group-hover:opacity-0 duration-500"
              src={dark}
              alt="shadow"
            />
            <img
              className="pills absolute z-0 opacity-0 group-hover:opacity-100 duration-500"
              src={light}
              alt="shadow"
            />
            <img className="pills absolute z-10" src={blue} alt="blue_pill" />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
