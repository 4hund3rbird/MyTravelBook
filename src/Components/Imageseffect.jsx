import styles from "./Imageseffect.module.css";
function Imageseffect() {
  return (
    <div className="m-auto">
      <div className=" w-full flex flex-col gap-1">
        <div className="flex justify-center">
          <div className="text-5xl w-[400px] text-transparent font-bold z-20 absolute  top-40 backdrop-blur-lg bg-gradient-to-r from-purple-700 to-rose-500 bg-clip-text p-8">
            <h1 className="m-auto">
              Your JourneySnaps are just waiting on a click!
            </h1>
          </div>
        </div>
        <div className={styles.scroller}>
          <div className={styles.innerscroller}>
            <img src="image1.jpg"></img>
            <img src="image2.jpg"></img>
            <img src="image3.jpg"></img>
            <img src="image1.jpg"></img>
            <img src="image2.jpg"></img>
            <img src="image3.jpg"></img>
          </div>
        </div>
        <div className={styles.scroller}>
          <div className={styles.innerscroller + " " + styles.reverse}>
            <img src="image4.png"></img>
            <img src="image9.png"></img>
            <img src="image8.png"></img>
            <img src="image4.png"></img>
            <img src="image9.png"></img>
            <img src="image8.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imageseffect;
