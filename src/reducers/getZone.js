

let initialState = JSON.parse(localStorage.getItem("getZone"))!=undefined ? JSON.parse(localStorage.getItem("getZone"))[0] : 0;

const getZone = (state = initialState, action) => {

    switch(action.type){ 
      case "ZONE" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getZone