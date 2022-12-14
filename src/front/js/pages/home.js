import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Characters from "../component/Characters.jsx";
import Planets from "../component/Planets.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Characters />
      <Planets />
    </>
  );
};
