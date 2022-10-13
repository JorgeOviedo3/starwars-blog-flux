import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/">
                    <img
                        height="75px"
                        src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG43.png"
                        className="navbar-brand mb-0 h1"
                    />
                </Link>
                <div className="ml-auto dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {store.favorites.map((element, index) => {
                            return (
                                <li key={element.uid}>
                                    <div className="dropdown-item d-flex align-items-center justify-content-between">
                                        {element.properties.name}
                                        <i
                                            onClick={(event) =>
                                                actions.toggleFavorite(
                                                    element
                                                )
                                            }
                                            className="fas fa-trash ms-3"
                                        ></i>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
