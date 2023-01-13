
let initialState = null;

const category = (state = initialState, action) => {

    switch(action.type){ 
      case "CATEGORY" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default category