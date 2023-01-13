
let initialState = "";

const selectMenu = (state = initialState, action) => {

    switch(action.type){ 
      case "SELECTMENU" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default selectMenu