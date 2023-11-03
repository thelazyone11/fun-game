import React, { useState } from "react";
import PositionScreen from "./PositionScreen";
import Json from "../json/output.json";

function RandomNumberSelector() {
  const [number, setNumber] = useState("");
  const [mainNumber, setMainNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const genrateNumber = async () => {
    setIsLoading(true);
    const timer = setInterval(() => {
      setNumber(Math.floor(Math.random() * 100));
    }, 100);

    const mainTimer = await setTimeout(() => {
      clearTimeout(timer);
      clearTimeout(mainTimer);
      setMainNumber(Math.floor(Math.random() * 100));
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="text-center">
        {isLoading ? (
          <div className="text-9xl font-extrabold text-gray-700 my-10">
            {number}{" "}
          </div>
        ) : (
          <div className="text-9xl font-extrabold text-pink-500 my-10">
            {mainNumber}{" "}
          </div>
        )}

        <button className="btn my-20 mx-5" onClick={genrateNumber}>
          Start
        </button>
      </div>
      {mainNumber === 0 || isLoading ? (
        <div></div>
      ) : (
        <PositionScreen data={Json[mainNumber - 1]}></PositionScreen>
      )}
    </div>
  );
}

export default RandomNumberSelector;
