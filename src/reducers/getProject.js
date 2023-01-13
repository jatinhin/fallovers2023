

let initialState = JSON.parse(localStorage.getItem("getProject"))!=undefined ? JSON.parse(localStorage.getItem("getProject"))[0] : 0;

const getProject = (state = initialState, action) => {

    switch(action.type){ 
      case "GETPROJECT" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getProject