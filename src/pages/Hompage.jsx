import PageNav from "../Components/PageNav";
import Texteffect from "../Components/Texteffect";

function Hompage() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex justify-center">
        <PageNav />
      </div>
      <Texteffect />
    </div>
  );
}

export default Hompage;
