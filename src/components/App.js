// import logo from "./logo.svg";
import blue from "../assets/blue.png";
import red from "../assets/red.png";
import light from "../assets/dark.png";
import dark from "../assets/light.png";
import "../styles/App.css";
import { useHistory } from "react-router-dom";

function App() {
  let history = useHistory();

  const handleRed = (history, e, f) => {
    const pills = document.querySelectorAll(`#${e}`);
    const hidePills = document.querySelectorAll(`#${f}`);
    hidePills.className += " hidden";
    console.log(pills);
    for (let g of pills) g.className += ` animate-sideWay${e}`;
    for (let g of hidePills) g.className += ` hidden`;
    setTimeout(() => history.push("/the-truth"), 1400);
  };
  return (
    <>
      <div className="h-screen flex items-center flex-col justify-center">
        <p className="font-mono absolute top-24 text-3xl mb-14 text-gray-600">
          The Choice is yours
        </p>
        <div className=" animate-sideWayRed"></div>
        <div className="animate-sideWayBlue"></div>
        <div className="flex w-full items-center justify-center pt-20 animate-opa space-x-36">
          <span className=" flex items-center justify-center h-80 mt-0 group hover:-mt-4 duration-500 cursor-pointer">
            <img
              className="pills absolute z-0 opacity-100 group-hover:opacity-0 duration-500"
              src={dark}
              alt="shadow"
              id="Red"
            />
            <img
              className="pills absolute z-0 opacity-0 group-hover:opacity-100 duration-500"
              src={light}
              alt="shadow"
              id="Red"
            />
            <img
              className="pills absolute z-10"
              src={red}
              alt="red_pill"
              id="Red"
              onClick={() => handleRed(history, "Red", "Blue")}
            />
          </span>
          <span className="flex items-center justify-center h-80 mt-0 group hover:-mt-4  duration-500 cursor-pointer">
            <img
              className="pills absolute z-0 opacity-100 group-hover:opacity-0 duration-500"
              src={dark}
              alt="shadow"
              id="Blue"
            />
            <img
              className="pills absolute z-0 opacity-0 group-hover:opacity-100 duration-500"
              src={light}
              alt="shadow"
              id="Blue"
            />
            <img
              className="pills absolute z-10"
              src={blue}
              alt="blue_pill"
              id="Blue"
              onClick={() => handleRed(history, "Blue", "Red")}
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
