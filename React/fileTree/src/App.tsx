import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type FileComp = {
  name: string;
  children?: FileComp[];
};

function App() {
  const [count, setCount] = useState(0);

  const files = {
    children: [
      {
        name: "node_modules",
        children: [
          { name: "@esbuild" },
          { name: "@babel", children: [{ name: "global" }] },
        ],
      },
      { name: "package.json" },
      { name: ".gitignore" },
    ],
  };

  return (
    <div className="App">
      {files.children.map((el) => {
        return <File entry={el} depth={1} />;
      })}
    </div>
  );
}

const File = ({ entry, depth }: { entry: FileComp; depth: number }) => {
  const [isExanded, setIsExpanded] = useState(false);
  return (
    <div>
      {entry.children ? (
        <button onClick={() => setIsExpanded((prev) => !prev)}>
          {isExanded ? "-" : "+"} {entry.name}
        </button>
      ) : (
        <p>{entry.name}</p>
      )}

      {isExanded && (
        <div style={{ paddingLeft: `${depth * 20}px` }}>
          {entry.children?.map((el) => (
            <File entry={el} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
