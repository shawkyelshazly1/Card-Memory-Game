import React, { useState } from "react";
import CardsGrid from "./CardsGrid";
import Header from "./Header";
import defCharacters from "../utils/characters.json";
import arrayShuffle from "array-shuffle";

export default function Main() {
  const [characters, setCharacters] = useState(defCharacters);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (id) => {
    setCharacters(arrayShuffle(characters));
    handleScore(id);
  };

  const handleScore = (id) => {
    characters.forEach((character) => {
      if (character.id === id && character.clicked === false) {
        character.clicked = true;
        setScore(score + 1);
      } else if (character.id === id && character.clicked === true) {
        if (score > highScore) {
          setHighScore(score);
        }
        setScore(0);
        characters.forEach((character) => (character.clicked = false));
      }
    });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header score={score} highScore={highScore} />
      <CardsGrid characters={characters} handleClick={handleClick} />
    </div>
  );
}
