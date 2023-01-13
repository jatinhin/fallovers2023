
let initialState = JSON.parse(localStorage.getItem("getDashboard"))!=undefined ? JSON.parse(localStorage.getItem("getDashboard"))[0] : 0;

const getDashboard = (state = initialState, action) => {

    switch(action.type){ 
      case "GETDASHBOARD" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getDashboard