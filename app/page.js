"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateBreakTime, updatePlayTime } from "./redux/slice";
import GameScreen from "./gamescreen/gamescreen";

// import Json from "./json/output.json";

export default function Home() {
  const [playTime, setPlayTime] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isGameOn, setIsGameOn] = useState(false);
  // const dispatch = useDispatch();
  // const statebreakTime = useSelector((state) => state.breakTime);
  // const stateplayTime = useSelector((state) => state.playTime);

  const handleInput = (e) => {
    e.preventDefault();

    // if (playTime === "" && breakTime === "") {
    //   return setErrorText("Error : Please Enter play time and break time");
    // }

    // dispatch(updatePlayTime(playTime));
    // dispatch(updateBreakTime(breakTime));
    setIsGameOn(true);

    return setErrorText("");
  };

  useEffect(() => {
    // if (statebreakTime === null && stateplayTime === null) {
    //   console.log("data is null");
    // } else {
    //   console.log("data is NotNull");
    // }
  }, []);

  return (
    <main>
      {isGameOn ? (
        <GameScreen></GameScreen>
      ) : (
        <div className="flex min-h-screen flex-col items-center justify-between ">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9lx text-center mt-10">
              100 Position Challenge
            </h1>
          </div>

          {/* <form
            onSubmit={handleInput}
            className="w-full max-w-md  p-8 rounded-lg shadow-md"
          >
            <label className="text-2xl ">
              Enter your play time in minute :
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mb-4 text-white my-5"
              type="number"
              placeholder="Play Time"
              value={playTime}
              onChange={(e) => setPlayTime(e.target.value)}
            />
            <label className="text-2xl ">
              Enter your break time in minute :
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mb-4 text-white my-5"
              type="number"
              placeholder="Break Time"
              value={breakTime}
              onChange={(e) => setBreakTime(e.target.value)}
            />

            <label className="text-base text-red-800">{errorText}</label>

            <div className="mb-4">
            
            </div>
          </form> */}
          <div className="w-full max-w-md  p-8 rounded-lg shadow-md">
            <button
              onClick={handleInput}
              type="submit"
              className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 my-5"
            >
              Start
            </button>
          </div>

          <h4 className="text-2xl">How to play?</h4>
        </div>
      )}
    </main>
  );
}
