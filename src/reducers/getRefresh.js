
let initialState = "";

const getRefresh = (state = initialState, action) => {

    switch(action.type){ 
      case "GETREFRESH" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getRefresh