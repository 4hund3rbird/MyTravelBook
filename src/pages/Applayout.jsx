import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
const button_design =
  " w-1/2 px-4 py-2 font-mono rounded-full text-xl text-center  ease-in-out transistion-all duration-300 text-white font-bold mx-2 ";
const select_button_design =
  "bg-purple-500  shadow-lg shadow-purple-800 inset-2";
function Applayout() {
  const [selected, update_selected] = useState(0);

  function updatedesign(ele) {
    update_selected(ele);
  }
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="h-[96vh] flex justify-between  bg-white bg-opacity-20 rounded-xl backdrop-blur-sm w-[98%] m-auto overflow-hidden">
        <div className="w-[40%] h-full rounded-xl border-2 p-4">
          <div className="flex m-auto w-fit p-4">
            <img src="../public/logo.png" className="w-20" alt="logo" />
            <h1 className="font-bold text-4xl text-purple-700 ">
              JourneySnap.com
            </h1>
          </div>
          <div className="flex my-4 gap-2 justify-evenly p-4 rounded-full bg-white bg-opacity-10">
            <NavLink
              onClick={() => {
                updatedesign(0);
              }}
              className={
                button_design +
                " " +
                `${
                  selected === 0
                    ? select_button_design
                    : "hover:text-purple-600"
                }`
              }
              to="./countries"
            >
              Countries
            </NavLink>
            <NavLink
              onClick={() => {
                updatedesign(1);
              }}
              className={
                button_design +
                " " +
                `${
                  selected === 1
                    ? select_button_design
                    : "hover:text-purple-600"
                }`
              }
              to="./cities"
            >
              Cities
            </NavLink>
            <NavLink
              onClick={() => {
                updatedesign(2);
              }}
              className={
                button_design +
                " " +
                `${
                  selected === 2
                    ? select_button_design
                    : "hover:text-purple-600"
                }`
              }
              to="./form"
            >
              Add
            </NavLink>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
        <div className="w-[60%] h-full rounded-xl border-2"></div>
      </div>
    </div>
  );
}

export default Applayout;
