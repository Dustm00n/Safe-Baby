
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: [],
      register: [],
      baby: [],
      url: "https://3001-dustm00n-safebaby-p0kjp37e7z7.ws-us38.gitpod.io"
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
            localStorage.setItem("token", JSON.stringify(data))
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
            console.log("FLUX DATA", data)
            localStorage.setItem("token", JSON.stringify(data))
            history.push("/home")
            setStore({ logged: data })
          })
          .catch(error => console.log("HA OCURRIDO UN ERROR", error))
      },
      logOut: (history) => {
        localStorage.removeItem("token")
        history.push("/")
      },
      datosBaby: (formData, history) => {
        const { url } = getStore()
        fetch(`${url}/api/datababies/<int:id>`, {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log("FLUX DATA", data)
            if (current_user == JSON.stringify(data)) {
              localStorage.getItem("token", JSON.stringify(data))
              setStore({ baby: data })
              history.push("/progress")
            }
          })
          .catch(error => console.log("HA OCURRIDO UN ERROR", error))
      }
      //-----------------funciones Fetch Fin---------------//
    }
  };
};

export default getState;
