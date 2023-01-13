

let initialState = JSON.parse(localStorage.getItem("getDesignation"))!=undefined ? JSON.parse(localStorage.getItem("getDesignation"))[0] : 0;

const getDesignation = (state = initialState, action) => {

    switch(action.type){ 
      case "GETDESIGNATION" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getDesignation