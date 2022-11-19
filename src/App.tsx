import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [coords, setCoords] = useState<number[]>([]);
  const [collection, setCollection] = useState<any[]>([]);
  const [poppedCollection, setPoppedCollection] = useState<any[]>([]);

  const undoHander = () => {
    console.log("Popped");
    setCollection((prev: number[]) => {
      const temp = [...prev];
      setPoppedCollection((prev) => [...prev, temp.pop()]);
      return temp;
    });
  };

  const redoHander = () => {
    const endOfArray = poppedCollection.length - 1;
    const temp = [...poppedCollection];
    temp.pop();
    setCollection((prev: number[]) => {
      setPoppedCollection((prev) => [...temp]);
      return [...prev, poppedCollection[endOfArray]];
    });
  };
  console.log(poppedCollection);
  return (
    <>
      <div className="buttonContainer">
        <button onClick={undoHander}>Undo</button>
        <button disabled={poppedCollection.length < 1} onClick={redoHander}>
          redo
        </button>
      </div>
      <div
        onClick={(e) => {
          console.log();
          setCoords(() => [e.clientX, e.clientY]);
          setCollection((prev: any) => {
            return [...prev, [e.clientX, e.clientY]];
          });
        }}
        className="App"
      >
        <p>
          X:<span>{coords[0]}</span> Y:
          <span>{coords[1]}</span>
        </p>
        {collection.map((el: any[]) => {
          return (
            <div
              key={el[0] + Math.random()}
              style={{
                position: "absolute",
                left: `${el[0] - 10}px`,
                top: `${el[1] - 10}px`,
              }}
              className="circle"
            ></div>
          );
        })}
      </div>
    </>
  );
}

export default App;
