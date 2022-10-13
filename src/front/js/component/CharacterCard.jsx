import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    const { store, actions } = useContext(Context);
    const [characterDetails, setCharacterDetails] = useState();

    const loadDetails = async () => {
        const data = await actions.getCharacterDetails(props.id);
        setCharacterDetails(data);
    };

    useEffect(() => {
        loadDetails();
    }, []);

    return (
        <div className="col-4" key={props.id}>
            <div className="card">
                {characterDetails == undefined ? (
                    <div>Loading...</div>
                ) : (
                    <>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {characterDetails.properties.name}
                            </h5>
                            <div>
                                Gender: {characterDetails.properties.gender}
                            </div>
                            <div>
                                Hair Color:{" "}
                                {characterDetails.properties.hair_color}
                            </div>
                            <div>
                                Eye Color:{" "}
                                {characterDetails.properties.eye_color}
                            </div>
                            <div className="d-flex justify-content-between mt-2 flex-wrap">
                                <Link
                                    to={"/character/" + props.id}
                                    className="btn btn-primary"
                                >
                                    Learn more!
                                </Link>
                                <button
                                    onClick={(event) =>
                                        actions.toggleFavorite(characterDetails)
                                    }
                                    className="btn btn-outline-warning"
                                >
                                    <i className={actions.isFavorite(characterDetails)
                                        ? "fas fa-heart"
                                        : "far fa-heart"} />
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CharacterCard;
