import { NavLink } from "react-router-dom";

function LoginForm() {
  const tags =
    "w-[80%] bg-white placeholder:purple-500 bg-opacity-50 m-2  rounded-full border-purple-500 text-purple-500 font-semibold text-xl p-3 border-4 border-transparent hover:border-purple-500 hover:drop-shadow-xl hover:shadow-xl hover:shadow-purple-400 transition-all duration-200 ease-in-out focus:outline-none px-6 focus:border-purple-400 focus:bg-purple-200";
  const btn =
    "text-xl text-white font-bold font-mono rounded-full bg-gradient-to-tr from-fuchsia-400 to-pink-500 p-4 hover:bg-gradient-to-bl m-4 border-4  transition-all duration-200 hover:shadow-lg hover:shadow-pink-700  hover:-translate-y-3";
  return (
    <div className="">
      <div className=" p-4 text-4xl my-2  text-white font-bold font-mono text-center">
        <h1>Log into your account!</h1>
      </div>
      <div className="flex justify-center">
        <input className={tags} type="text" placeholder="Username"></input>
      </div>
      <div className="flex justify-center">
        <input className={tags} placeholder="Password" type="password"></input>
      </div>
      <div className="flex justify-center">
        <NavLink to="/applayout">
          <button className={btn}>Login</button>
        </NavLink>
      </div>
      <marker className="text-white font-semibold text-center">
        <h1> * new to JourneySnap try Signup :) </h1>
      </marker>
    </div>
  );
}

export default LoginForm;
