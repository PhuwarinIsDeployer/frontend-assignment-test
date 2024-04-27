import React, { useState, useEffect } from "react";
import { CardImageButtonType } from "./type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const CardImageButton: React.FC<CardImageButtonType> = ({
  name,
  time,
  onClick,
}) => {
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    if (countdown) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <button
      onClick={onClick}
      className="bg-custom-brown mb-2 rounded-lg p-2 w-full overflow-hidden shadow-lg relative"
    >
      <div className="flex items-center space-x-4">
        <img
          className="w-24 h-24 rounded-lg"
          src={`/assets/images/${name.toLowerCase()}.jpg`}
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

export default CardImageButton;
