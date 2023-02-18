import { useState, useEffect } from "react";
import "./styles/App.css";
import QueryFoxes from "./service/QueryFox";
import QueryNames from "./service/QueryName";
import AddButton from "./components/AddButton";
import ElementCollapse from "./components/ElementCollapse";

function App() {
  const [names, setNames] = useState([]);
  const [elements, setElements] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [buttonStatus, setButtonStatus] = useState(false);

  const newName = () => {
    QueryNames().then((data) => {
      console.log(data[0].name)
      setNames([...names, data[0].name]);
    });
  }

  const newFox = () => {
    setButtonStatus(true);
    newName();
    QueryFoxes().then((data) => {
      const imgUrl = data.image;
      setElements([...elements,
        {
          title: names[names.length - 1],
          url: imgUrl,
          id: currentId,
        },
      ]);
      setCurrentId(currentId + 1);
      setButtonStatus(false);
    });
  }

  useEffect(() => {
    newName();
  }, []);

  const addElement = () => {
    newFox();
  };

  return (
    <div className="app">
      <h1>Random Foxes</h1>
      <AddButton onClick={addElement} status={buttonStatus}/>
      <ElementCollapse elementObj={elements} />
    </div>
  );
}

export default App;
