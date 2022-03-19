
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      register: null,
      url: "https://3001-dustm00n-safebaby-38b27hfp9tt.ws-us38.gitpod.io"
    },
    actions: {
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      //   getActions().changeColor(0, "green");
      // },

      // getMessage: () => {
      //   // fetching data from the backend
      //   fetch(process.env.BACKEND_URL + "/api/hello")
      //     .then((resp) => resp.json())
      //     .then((data) => setStore({ message: data.message }))
      //     .catch((error) =>
      //       console.log("Error loading message from backend", error)
      //     );
      // },
      // changeColor: (index, color) => {
      //   //get the store
      //   const store = getStore();

      //   //we have to loop the entire demo array to look for the respective index
      //   //and change its color
      //   const demo = store.demo.map((elm, i) => {
      //     if (i === index) elm.background = color;
      //     return elm;
      //   });

      //reset the global store
      // setStore({ demo: demo });
      // },

      //-----------------funciones Fetch Inicio ---------------//
      signUp: (formData, history) => {
        const { url } = getStore()
        fetch(`${url}/api/signup`, {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log("FLUX DATA", data)
            localStorage.setItem("token", data.access_token)
            setStore({ register: data })
            history.push("/home")
          })
          .catch(error => console.log("HA OCURRIDO UN ERROR", error))
      },
      login: (formData, history) => {
        const { url } = getStore()
        fetch(`${url}/api/login`, {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            localStorage.setItem("token", data.access_token)
            history.push("/home")
          })
          .catch(error => console.log("HA OCURRIDO UN ERROR", error))
      },
      logOut: (history) => {
        localStorage.removeItem("token")
        history.push("/")
      }
      //-----------------funciones Fetch Fin---------------//
    }
  };
};

export default getState;
