import React from "react";
import { Link } from "react-router-dom";
import { generateRandomColor } from "./utils";
import "./ColorList.css";

export default function ColorList({ colorData, createColor }) {
  const handleClick = () => createColor(generateRandomColor());
  return (
    <section>
      <header>
        <h1>Colors</h1>
      </header>
      <ul>
        {colorData.map(({ name, hue }, index) => (
          <li
            key={`${name}-${hue}-${index}`}
            style={{ color: `hsl(${hue}, 100%, 50%)` }}
          >
            <Link
              style={{ color: `hsl(${hue}, 100%, 50%)` }}
              to={`color/${index}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <footer>
        <Link to="/new" className="button" id="add-new">
          Create
        </Link>
        <button onClick={handleClick}>Generate</button>
      </footer>
    </section>
  );
}
