import { useState } from "react";
import "./styles/App.css";
import AddButton from "./components/AddButton";
import ElementCollapse from "./components/ElementCollapse";

function App() {
  const [elements, setElements] = useState([
    { id: 0, title: "Message 0", body: "Hello world!" },
  ]);
  const [currentId, setCurrentId] = useState(1);

  const addElement = () => {
    setCurrentId(currentId + 1);
    setElements([
      ...elements,
      {
        title: "Message " + currentId,
        body: "Hey",
        id: currentId,
      },
    ]);
  };

  return (
    <div className="app">
      <h1>Fancy React app</h1>
      <AddButton onClick={addElement} />
      <ElementCollapse elementObj={elements} />
    </div>
  );
}

export default App;
