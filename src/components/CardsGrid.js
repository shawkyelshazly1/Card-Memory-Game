import React from "react";
import CaharcterCard from "./CaharcterCard";

export default function CardsGrid({ characters, handleClick }) {
  return (
    <div className="bg-teal-50 text-white flex-1 grid grid-cols-3 gap-4 p-5 w-2/4 m-auto">
      {characters.map((character) => (
        <CaharcterCard
          character={character}
          key={character.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
