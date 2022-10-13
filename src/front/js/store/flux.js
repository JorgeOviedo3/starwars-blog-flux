const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
            characters: [],
            planets: [],
            favorites: [],
        },
        actions: {
            // Use getActions to call a function within a fuction
            isFavorite:(item) => {
                const store = getStore();
                return store.favorites.find((fav) => fav._id === item._id);
            },
            toggleFavorite: (item) => {
                const store = getStore();
                const actions = getActions();
                if (actions.isFavorite(item)) {
                    setStore({
                        favorites: store.favorites.filter((fav) => {
                            return fav._id !== item._id;
                        }),
                    });
                } else {
                    setStore({ favorites: [...store.favorites, item] });
                }
            },

            getCharacters: async () => {
                try {
                    const response = await fetch(
                        "https://www.swapi.tech/api/people"
                    );
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los personajes");
                        return;
                    }
                    const body = await response.json();
                    setStore({ characters: body.results });
                } catch (error) {
                    alert(error);
                }
            },

            getCharacterDetails: async (id) => {
                try {
                    const response = await fetch(
                        `https://www.swapi.tech/api/people/${id}`
                    );
                    if (!response.ok) {
                        alert(
                            "Algo ha pasado al cargar los detalles de los characters"
                        );
                        return;
                    }
                    const body = await response.json();
                    return body.result;
                } catch (error) {
                    alert(error);
                }
            },

            getPlanets: async () => {
                try {
                    const response = await fetch(
                        "https://www.swapi.tech/api/planets"
                    );
                    if (!response.ok) {
                        alert("Algo ha pasado al cargar los mapas");
                        return;
                    }
                    const body = await response.json();
                    setStore({ planets: body.results });
                } catch (error) {
                    alert(error);
                }
            },

            getPlanetDetails: async (id) => {
                try {
                    const response = await fetch(
                        `https://www.swapi.tech/api/planets/${id}`
                    );
                    if (!response.ok) {
                        alert(
                            "Algo ha pasado al cargar los detalles de planetas"
                        );
                        return;
                    }
                    const body = await response.json();
                    return body.result;
                } catch (error) {
                    alert(error);
                }
            },

            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(
                        process.env.BACKEND_URL + "/api/hello"
                    );
                    const data = await resp.json();
                    setStore({ message: data.message });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({ demo: demo });
            },
        },
    };
};

export default getState;
