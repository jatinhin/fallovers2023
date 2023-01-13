

  let initialState = JSON.parse(localStorage.getItem("mainProjects"))!=undefined ? JSON.parse(localStorage.getItem("mainProjects"))[0] : 0;

  const mainProjects = (state = initialState, action) => {

      switch(action.type){ 
        case "MAINPROJECTS" : return action.parm;
        case "RESET": return initialState; //Always return the initial state
        default : return state;
    }
  }

  export default mainProjects