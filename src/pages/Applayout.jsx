import { Outlet } from "react-router-dom";

function Applayout() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="h-[96vh] flex justify-between  bg-white bg-opacity-20 rounded-xl backdrop-blur-sm w-[98%] m-auto overflow-hidden">
        <div className="w-[40%] h-full rounded-xl border-2 p-4">
          <div className="flex m-auto w-fit p-4">
            <img src="logo.png" className="w-20" alt="logo" />
            <h1 className="font-bold text-4xl text-purple-700 ">
              JourneySnap.com
            </h1>
          </div>
          <Outlet />
        </div>
        <div className="w-[60%] h-full rounded-xl border-2"></div>
      </div>
    </div>
  );
}

export default Applayout;
