import React, { useState, useEffect } from "react";
import { CardButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";
import appleImage from "../../../../public/assets/images/apple.jpg";
import bananaImage from "../../../../public/assets/images/banana.jpg";
import broccoliImage from "../../../../public/assets/images/broccoli.jpeg";
import carrotImage from "../../../../public/assets/images/carrot.jpg";
import cucumberImage from "../../../../public/assets/images/cucumber.jpg";
import mangoImage from "../../../../public/assets/images/mango.jpg";
import mushroomImage from "../../../../public/assets/images/mushroom.jpg";
import orangeImage from "../../../../public/assets/images/orange.jpg";
import pineappleImage from "../../../../public/assets/images/pineapple.jpg";
import tomatoImage from "../../../../public/assets/images/tomato.jpg";
import watermelonImage from "../../../../public/assets/images/watermelon.jpg";
import placeholderImage from "../../../../public/assets/images/placeholder.png";

import { TODO_NAMES } from "@/app/constant/todo-name";

const CardButton: React.FC<CardButtonProps> = ({ name, time, onClick }) => {
  const [countdown, setCountdown] = useState(time);
  const [image, setImage] = useState<StaticImageData>();

  useEffect(() => {
    if (countdown) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  useEffect(() => {
    switch (name) {
      case TODO_NAMES.APPLE:
        setImage(appleImage);
        break;
      case TODO_NAMES.BANANA:
        setImage(bananaImage);
        break;
      case TODO_NAMES.BROCCOLI:
        setImage(broccoliImage);
        break;
      case TODO_NAMES.CARROT:
        setImage(carrotImage);
        break;
      case TODO_NAMES.CUCUMBER:
        setImage(cucumberImage);
        break;
      case TODO_NAMES.MANGO:
        setImage(mangoImage);
        break;
      case TODO_NAMES.MUSHROOM:
        setImage(mushroomImage);
        break;
      case TODO_NAMES.ORANGE:
        setImage(orangeImage);
        break;
      case TODO_NAMES.PINEAPPLE:
        setImage(pineappleImage);
        break;
      case TODO_NAMES.TOMATO:
        setImage(tomatoImage);
        break;
      case TODO_NAMES.WATERMELON:
        setImage(watermelonImage);
        break;
      default:
        setImage(undefined);
    }
  }, [name]);

  return (
    <button
      onClick={onClick}
      className="bg-custom-brown mb-2 rounded-lg p-2 w-full overflow-hidden shadow-lg relative"
    >
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-lg"
          src={image?.src ?? placeholderImage.src}
          alt={name}
        />

        <div className="font-bold text-xl">{name}</div>
        {!!countdown && (
          <div className="flex items-center space-x-1">
            <FontAwesomeIcon icon={faClock} className="text-white" />
            <p>{countdown + "s"}</p>
          </div>
        )}
      </div>
    </button>
  );
};

export default CardButton;
