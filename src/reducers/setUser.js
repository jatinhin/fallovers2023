
let initialState = JSON.parse(localStorage.getItem("user"))!=undefined ? JSON.parse(localStorage.getItem("user"))[0]  : 0;

const setUserlog = (state = initialState, action) => {

   // console.log(localStorage.getItem("user"));

    switch(action.type){ 
      case "LOGUSER" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default setUserlog