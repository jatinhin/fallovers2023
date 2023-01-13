

let initialState = JSON.parse(localStorage.getItem("getAssignform"))!=undefined ? JSON.parse(localStorage.getItem("getAssignform"))[0] : 0;

const getAssignform = (state = initialState, action) => {

    switch(action.type){ 
      case "GETASSIGNFORM" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getAssignform