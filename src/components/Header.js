import React from "react";

export default function Header({ score, highScore }) {
  return (
    <div className="bg-red-500 text-white h-fit flex flex-row items-center justify-center p-5">
      <span className="font-extrabold text-5xl font-Marvel flex-1">
        Marvel Memory Game
      </span>
      <div className="flex flex-col items-start gap-1">
        <span className="font-bold text-2xl bg-white pr-2 pl-2 rounded-lg text-red-500">
          Highscore: {highScore}
        </span>
        <span className="font-bold text-2xl bg-white pr-2 pl-2 rounded-lg text-red-500">
          Current Score:{score}
        </span>
      </div>
    </div>
  );
}
