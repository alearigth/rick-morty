import React, { useEffect, useState } from "react";

//Components
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

//Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);

  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacter = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .catch((error) => console.log(error));
  };

  const onPrev = () => {
    fetchCharacter(info.prev)
  }
  const onNext = () => {
    fetchCharacter(info.next)
  }
  useEffect(() => {
    fetchCharacter(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand={"Rick and Morty"} />

      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
        <Characters characters={characters} />
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
      </div>
    </>
  );
}

export default App;
