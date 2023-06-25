const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
		},
		actions: {
			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token")

				if (token && token != "" && token != undefined) setStore({token: token})
				console.log(
					"Everything loaded, syncing the session storage token to the store."
				)
			},

			login: (email, password) => {
				fetch('https://kaybahr-didactic-space-halibut-9vgr64x95xwc9xg6-3001.preview.app.github.dev/api/token',
				{
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				}
				)
				.then((response) => {
					const data = response.json()
					console.log("This came from the backend", data)
					sessionStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					return data;
				})
				.catch((error) => {
					console.error("There has been an error with logging in", error)
					return false;
				})
			},

			signup: (email, password) => {

				fetch('https://kaybahr-didactic-space-halibut-9vgr64x95xwc9xg6-3001.preview.app.github.dev/api/signup',
                {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password
                        })
                }
				)
				.then((response) => {
					return response.json()
				})
				.then(data => {
					if (data.msg === 'User created successfully') {
						setStore({ token: data.access_token, email: data.email });
						return data
					} else {
						alert("Failed to create user. Please check your input and try again.");
					}
				})
                .catch ((error) => {
                    console.error('Error creating user:', error);
                    return false;
                })
            },

			logout: () => {
				const token = sessionStorage.removeItem("token");
				setStore({token: null});
				console.log("Logging out");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/private")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
		}
	};
};

export default getState;
