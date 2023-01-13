
let initialState = "";

const fullSize = (state = initialState, action) => {

    switch(action.type){ 
      case "FULLSIZE" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default fullSize