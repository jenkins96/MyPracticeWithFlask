const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: []
		},
		actions: {
			fetchPeople: async () => {
				let URL = "https://swapi.dev/api/people/";
				let CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};

				try {
					const response = await fetch(URL, CONFIG);
					if (response.ok) {
						const jsonResponse = await response.json();
						console.log("DATA", jsonResponse);
						return setStore({ peopleList: jsonResponse.results });
					}
					throw new Error("Request Failed!");
				} catch (error) {
					return console.log(error);
				}
			},
			setFavorites: name => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
			}
		}
	};
};

export default getState;
