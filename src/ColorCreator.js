import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { generateRandomColor } from "./utils";
import "./ColorCreator.css";

export default function ColorCreator({ createColor }) {
  const history = useHistory();
  const randomColor = generateRandomColor();
  const [name, setName] = useState(randomColor.name);
  const [hue, setHue] = useState(randomColor.hue);
  const handleNameChange = ({ target }) => setName(target.value);
  const handleHueChange = ({ target }) => setHue(target.value);
  function handleClick() {
    const newColor = {
      name,
      hue
    };
    createColor(newColor);
    history.push("/");
  }
  return (
    <section>
      <header>
        <h1>Create</h1>
      </header>
      <div className="form">
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Hue:
          <input
            type="number"
            value={hue}
            onChange={handleHueChange}
            min="0"
            max="355"
            step="5"
          />
        </label>
      </div>
      <div className="action">
        <button onClick={handleClick} disabled={!name.length}>
          Create new color
        </button>
      </div>
    </section>
  );
}
