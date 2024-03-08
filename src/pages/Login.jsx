import { useState } from "react";

import PageNav from "../Components/PageNav";
import Imageseffect from "../Components/Imageseffect";
import LoginForm from "../Components/LoginForm";
import SignupForm from "../Components/SignupForm";
const button_design =
  " w-1/2 px-4 py-2 font-mono rounded-full text-xl ease-in-out transistion-all duration-300 text-white font-bold mx-2 ";
const select_button_design =
  "bg-purple-500  shadow-lg shadow-purple-800 inset-2";
function Login() {
  const [islogin, updateislogin] = useState(false);
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex justify-center h-[13vh]">
        <PageNav />
      </div>
      <div className="flex justify-center  h-[80vh] w-full gap-5">
        <div className=" flex justify-evenly flex-col bg-white bg-opacity-20  rounded-xl backdrop-blur-sm w-[45%] overflow-hidden">
          <Imageseffect />
        </div>
        <div className="w-[40%]  bg-white bg-opacity-20  rounded-xl backdrop-blur-sm">
          <div className="flex rounded-full p-4 m-auto my-4 bg-white bg-opacity-10  h-20 w-[40%]">
            <button
              className={
                button_design +
                `${!islogin ? select_button_design : " hover:text-purple-600"}`
              }
              onClick={() => updateislogin(false)}
            >
              Login
            </button>

            <button
              className={
                button_design +
                `${islogin ? select_button_design : " hover:text-purple-600"}`
              }
              onClick={() => updateislogin(true)}
            >
              Signup
            </button>
          </div>
          <div className="w-[80%] bg-white bg-opacity-10 m-auto h-[70%] rounded-xl flex flex-col justify-center">
            {!islogin ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
