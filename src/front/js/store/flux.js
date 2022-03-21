
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      register: null,
      baby: {},
      url: "https://3001-dustm00n-safebaby-38b27hfp9tt.ws-us38.gitpod.io"
    },
    actions: {
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
      },
      datosBaby: (formData, history) => {
        const { url } = getStore()
        fetch(`${url}/api/datababies`, {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log("FLUX DATABABY", data)
            setStore({ baby: data })
            history.push("/progress")
          })
          .catch(error => console.log("HA OCURRIDO UN ERROR", error))
      }
      //-----------------funciones Fetch Fin---------------//
    }
  };
};

export default getState;
