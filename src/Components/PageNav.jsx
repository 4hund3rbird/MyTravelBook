import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  const button_design =
    "border-2 px-4 py-2 bg-purple-700 border-purple-700 rounded-xl ease-in-out text-white font-semibold mx-2 hover:-translate-y-2 hover:bg-transparent transition-all duration-300 hover:text-purple-700 ";
  const pages = [
    { title: "Home", path: "/" },
    { title: "Product", path: "/product" },
    { title: "Login", path: "/login" },
  ];
  return (
    <div className="flex justify-between  px-4 py-4 fixed w-[95%] m-auto my-4 bg-white bg-opacity-10  rounded-xl trans">
      <NavLink className="flex gap-2 font-mono" to="/">
        <img src="logo.png" className="w-20" alt="logo" />
        <h1 className="font-bold text-4xl text-purple-700 ">JourneySnap</h1>
      </NavLink>
      <div className="flex flex-col justify-center">
        <div>
          <NavLink className={button_design} to="/product">
            Product
          </NavLink>
          <NavLink className={button_design} to="/login">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default PageNav;
