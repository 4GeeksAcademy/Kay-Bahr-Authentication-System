const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token")

				if (token && token != "" && token != undefined) setStore({token: token})
				console.log(
					"Everything loaded, syncing the session storage token to the store."
				)
			},

			login: async (email, password) => {
				
				const opts = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				}
				
				try {
					const resp = await fetch('https://kaybahr-didactic-space-halibut-9vgr64x95xwc9xg6-3001.preview.app.github.dev/api/token', opts)
					if (resp.status !== 200){
						alert("There has been an error");
						return false;
					}
	
					const data = await resp.json()
					console.log("This came from the backend", data)
					sessionStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					return true;
				}
				catch(error) {
					console.error("There has been an error with logging in", error)
				}
			},

			logout: () => {
				const token = sessionStorage.removeItem("token");
				setStore({token: null});
				console.log("Logging out");
			},

			getMessage: async () => {
				try{
					const store = getStore();
					const opts = {
						headers: {
							"Authorization": "Bearer " + store.token
						}
					}
					// fetching data from the backend
					const resp = await fetch('https://kaybahr-didactic-space-halibut-9vgr64x95xwc9xg6-3001.preview.app.github.dev/api/private', opts)
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			}
		}
	};
};

export default getState;
