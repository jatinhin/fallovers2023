

let initialState = JSON.parse(localStorage.getItem("getDivision"))!=undefined ? JSON.parse(localStorage.getItem("getDivision"))[0] : 0;

const getDivision = (state = initialState, action) => {

    switch(action.type){ 
      case "DIVISION" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getDivision