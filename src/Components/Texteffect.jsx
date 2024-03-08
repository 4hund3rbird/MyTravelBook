import { useEffect, useState } from "react";
const data = "Journey Snap: Map Your Memories, Track Your Adventures!".split(
  " "
);

function Texteffect() {
  const [words, setwords] = useState("");
  const [currword, setcurrword] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setwords((e) => {
        return e + data[currword];
      });
      setcurrword((e) => {
        if (e < data.length) {
          return e + 1;
        }
      });
    }, 1000);
  }, []);
  return <div>{words}</div>;
}
export default Texteffect;
