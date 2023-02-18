import { useState, useEffect } from "react";
import "./styles/App.css";
import QueryFoxes from "./service/query";
import AddButton from "./components/AddButton";
import ElementCollapse from "./components/ElementCollapse";

function App() {
  const [elements, setElements] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  const newFox = () => {
    QueryFoxes().then((data) => {
      const imgUrl = data.image;
      setElements([...elements,
        {
          title: "Fox " + currentId,
          url: imgUrl,
          id: currentId,
        },
      ]);
      setCurrentId(currentId + 1);
    });
  }

  useEffect(() => {
    newFox();
  }, []);

  const addElement = () => {
    newFox();
  };

  return (
    <div className="app">
      <h1>Random Foxes</h1>
      <AddButton onClick={addElement} />
      <ElementCollapse elementObj={elements} />
    </div>
  );
}

export default App;
