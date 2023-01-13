

let initialState = JSON.parse(localStorage.getItem("rfi"))!=undefined ? JSON.parse(localStorage.getItem("rfi"))[0] : 0;

const rfi = (state = initialState, action) => {

    switch(action.type){ 
      case "RFI" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default rfi