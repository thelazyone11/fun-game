import React from "react";

import Image from "next/image";

function PositionScreen(props) {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <Image src={props.data.imgUrl} width={500} height={500} />
      <p>
        <strong>Difficulty Level :</strong> {props.data.difficultyLevel}
      </p>
      <p>
        <strong>Special Features :</strong> {props.data.specialFeatures}
      </p>
      <p>{props.data.discription}</p>
      <p>{props.data.discription2}</p>
    </div>
  );
}

export default PositionScreen;
