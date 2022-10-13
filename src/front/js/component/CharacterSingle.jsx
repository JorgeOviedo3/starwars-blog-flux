import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterSingle = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [characterDetails, setCharacterDetails] = useState();

  const loadDetails = async () => {
    const data = await actions.getCharacterDetails(params.id);
    setCharacterDetails(data);
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <div className="container mt-5">
      {characterDetails == undefined ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex justify-content-between">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
            height="auto"
            width="400px"
            alt="..."
          />
          <div className="ms-5">
            <h1>{characterDetails.properties.name}</h1>
            <h2>{characterDetails.description}</h2>
            <hr></hr>
            <div className="d-flex mt-5 flex-wrap">
              <div>
                <h3 className="me-4">Name</h3>
                <p>{characterDetails.properties.name}</p>
              </div>
              <div className="me-4">
                <h3>Birth Year</h3>
                <p>{characterDetails.properties.birth_year}</p>
              </div>
              <div className="me-4">
                <h3>Gender</h3>
                <p>{characterDetails.properties.gender}</p>
              </div>
              <div className="me-4">
                <h3>Height</h3>
                <p>{characterDetails.properties.height}</p>
              </div>
              <div className="me-4">
                <h3>Eye Color</h3>
                <p>{characterDetails.properties.eye_color}</p>
              </div>
              <div className="me-4">
                <h3>Skin Color</h3>
                <p>{characterDetails.properties.skin_color}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Link to="/" className="mt-4 btn-back-home btn btn-warning btn-lg">
        Back Home
      </Link>
    </div>
  );
};

export default CharacterSingle;
