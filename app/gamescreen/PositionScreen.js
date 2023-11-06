import React from "react";

import Image from "next/image";

function PositionScreen(props) {
  return (
    <div className="mx-auto max-w-screen-lg px-4 mb-10">
      <h2 className="text-3xl my-5 font-bold">{props.data.title}</h2>
      <Image
        src={props.data.imgUrl}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        alt=""
      />
      <p className="mt-3">
        <strong>Difficulty Level :</strong> {props.data.difficultyLevel}
      </p>
      <p className="mt-3 ">
        <strong>Special Features :</strong> {props.data.specialFeatures}
      </p>
      <p className="mt-3 ">{props.data.discription}</p>
      <p>{props.data.discription2}</p>
    </div>
  );
}

export default PositionScreen;
