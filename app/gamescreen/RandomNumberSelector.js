import React, { useState } from "react";
import PositionScreen from "./PositionScreen";
import Json from "../json/output.json";
import { useDispatch, useSelector } from "react-redux";
import { updatePostionNumber } from "../redux/slice";

function RandomNumberSelector() {
  const [number, setNumber] = useState("");
  const [mainNumber, setMainNumber] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const donePostion = useSelector((state) => state.postionNumber);
  const statebreakTime = useSelector((state) => state.breakTime);
  const stateplayTime = useSelector((state) => state.playTime);

  const genrateNumber = async () => {
    setIsLoading(true);
    const timer = setInterval(() => {
      setNumber(Math.floor(Math.random() * 100));
    }, 100);

    const mainTimer = setTimeout(() => {
      while (true) {
        var num = Math.floor(Math.random() * 100);

        if (!donePostion.includes(num)) {
          setMainNumber(num);
          dispatch(updatePostionNumber(num));
          clearTimeout(timer);
          clearTimeout(mainTimer);
          setIsLoading(false);
          break;
        }
      }
    }, 3000);
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="text-left ml-4 mt-4">
            Play Time : {stateplayTime}min
          </div>
          <div className="text-left ml-4 mt-2">
            Break Time : {statebreakTime}min
          </div>
        </div>

        <div className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 bg-blue-500 rounded-full flex items-center justify-center m-4">
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6lx">
            {donePostion.length}
          </p>
        </div>
      </div>
      <div className="flex min-h-screen flex-col  justify-between p-2">
        <div className="text-center">
          {isLoading ? (
            <div className="text-9xl font-extrabold text-gray-700 my-5">
              {number}{" "}
            </div>
          ) : (
            <div className="text-9xl font-extrabold text-pink-500 my-5">
              {mainNumber}{" "}
            </div>
          )}

          <button className="btn  " onClick={genrateNumber}>
            Start
          </button>
        </div>
        {mainNumber === 0 || isLoading ? (
          <div></div>
        ) : (
          <PositionScreen data={Json[mainNumber - 1]}></PositionScreen>
        )}
      </div>
    </div>
  );
}

export default RandomNumberSelector;
