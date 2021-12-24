import React from "react";

export default function CaharcterCard({ character, handleClick }) {
  return (
    <div
      className="flex flex-col items-center border-red-600 border-4 rounded-lg  w-64 cursor-pointer"
      onClick={() => {
        handleClick(character.id);
      }}
    >
      <img
        src={character.image}
        className="object-contain h-60 w-60"
        alt={character.name}
      />
      <h1 className="text-white bg-red-500 w-full p-1 text-2xl font-Marvel font-extrabold">
        {character.name}
      </h1>
    </div>
  );
}
