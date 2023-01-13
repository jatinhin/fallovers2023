

let initialState = JSON.parse(localStorage.getItem("getassignProjects"))!=undefined ? JSON.parse(localStorage.getItem("getassignProjects"))[0] : 0;

const getassignProjects = (state = initialState, action) => {

    switch(action.type){ 
      case "GETASSIGNPROJECTS" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getassignProjects