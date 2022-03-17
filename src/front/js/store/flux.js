const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: false,
      register: null
      //   message: null,
      //   demo: [
      //     {
      //       title: "FIRST",
      //       background: "white",
      //       initial: "white",
      //     },
      //     {
      //       title: "SECOND",
      //       background: "white",
      //       initial: "white",
      //     },
      //   ],
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
      login: (formData) => {
        fetch('https://3001-dustm00n-safebaby-ahvi40pv5ls.ws-us34.gitpod.io/api/signup', {
          body: formData
        })

          .then(response => response.json())
          .then(data => {
            console.log(data)
            sessionStorage.getItem("token", data.token)
            setStore({ logged: true })
          })
      },
      signUp: (formData) => {
        fetch('https://3001-dustm00n-safebaby-ahvi40pv5ls.ws-us34.gitpod.io/api/signup', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setStore({ register: data })
          })
          .catch(error => console.log("error", error))
      }
      // setStore({ register: setRegisterForm });
      // console.log("esta llegando");
      // register: (registerForm) => {
      //   setStore({ register: registerForm })
      // }
    },
  };
};

export default getState;
