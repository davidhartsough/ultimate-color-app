import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from "./Loader";
import "./ColorPage.css";

export default function ColorPage({ colorData }) {
  const history = useHistory();
  const { index } = useParams();
  const [color, setColor] = useState(false);
  useEffect(() => {
    const indexNumber = Number(index);
    if (
      !Number.isNaN(indexNumber) &&
      indexNumber < colorData.length &&
      indexNumber >= 0
    ) {
      setColor(colorData[index]);
    } else {
      history.push("/");
    }
  }, [colorData, index, history]);
  if (!color) return <Loader />;
  const { name, hue } = color;
  return (
    <div
      className="color-page"
      style={{
        backgroundColor: `hsl(${hue}, 100%, 50%)`,
        backgroundImage: `linear-gradient(hsl(${hue}, 100%, 50%), hsl(${hue}, 40%, 40%))`
      }}
    >
      <h2>{name}</h2>
    </div>
  );
}
