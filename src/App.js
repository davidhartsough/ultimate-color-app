import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Loader from "./Loader";
import ColorList from "./ColorList";
import ColorCreator from "./ColorCreator";
import ColorPage from "./ColorPage";
import "./App.css";

export default function App() {
  const [colorData, setColorData] = useState([]);
  useEffect(() => {
    fetch("/colors.json")
      .then(response => response.json())
      .then(({ colors }) => setColorData(colors))
      .catch(console.warn);
  }, []);
  const createColor = newColor => setColorData([...colorData, newColor]);
  if (!colorData.length) return <Loader />;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ColorList colorData={colorData} createColor={createColor} />
        </Route>
        <Route path="/new">
          <ColorCreator createColor={createColor} />
        </Route>
        <Route path="/color/:index">
          <ColorPage colorData={colorData} />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}
