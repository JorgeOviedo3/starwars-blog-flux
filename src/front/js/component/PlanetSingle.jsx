import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetSingle = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [planetDetails, setPlanetDetails] = useState();

  const loadDetails = async () => {
    const data = await actions.getPlanetDetails(params.id);
    setPlanetDetails(data);
  };

  useEffect(() => {
    loadDetails();
  }, []);

  return (
    <div className="container mt-5">
      {planetDetails == undefined ? (
        <div>Loading...</div>
      ) : (
        <div className="d-flex justify-content-between">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`}
            height="auto"
            width="400px"
            alt="..."
          />
          <div className="ms-5">
            <h1>{planetDetails.properties.name}</h1>
            <h2>{planetDetails.description}</h2>
            <hr></hr>
            <div className="d-flex mt-5 flex-wrap">
              <div>
                <h3 className="me-4">Name</h3>
                <p>{planetDetails.properties.name}</p>
              </div>
              <div className="me-4">
                <h3>Climate</h3>
                <p>{planetDetails.properties.climate}</p>
              </div>
              <div className="me-4">
                <h3>Terrain</h3>
                <p>{planetDetails.properties.terrain}</p>
              </div>
              <div className="me-4">
                <h3>Population</h3>
                <p>{planetDetails.properties.population}</p>
              </div>
              <div className="me-4">
                <h3>Diameter</h3>
                <p>{planetDetails.properties.diameter}</p>
              </div>
              <div className="me-4">
                <h3>Gravity</h3>
                <p>{planetDetails.properties.gravity}</p>
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

export default PlanetSingle;
