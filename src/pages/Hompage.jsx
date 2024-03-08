import PageNav from "../Components/PageNav";
import Texteffect from "../Components/Texteffect";
const button_design =
  "border-2 h-20  px-4 py-2 box-shadow-lg shadow-purple-500 text-2xl bg-purple-500 border-purple-500 rounded-xl ease-in-out text-white font-bold mx-2 hover:-translate-y-2 hover:bg-transparent hover:bg-white hover:bg-opacity-40 transition-all duration-300 hover:text-purple-700 ";

function Hompage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex justify-center h-[13vh]">
        <PageNav />
      </div>
      <div className="w-[95%] m-auto flex justify-around  bg-white bg-opacity-20  rounded-xl backdrop-blur-sm">
        <div className="flex flex-col justify-center bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text  w-[50%]">
          <h1 className=" p-8 text-transparent font-extrabold text-7xl font-mono rounded-xl inset-5 bg-opacity-25  ">
            Journey Snap: Map Your Memories, Track Your Adventures!
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <img src="map.gif" />
        </div>
      </div>
      <div className="w-full text-center p-4">
        <button className={button_design + " m-auto"}>Get Started!</button>
      </div>
    </div>
  );
}
export default Hompage;
