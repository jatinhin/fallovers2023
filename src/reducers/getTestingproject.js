

let initialState = JSON.parse(localStorage.getItem("getTestingproject"))!=undefined ? JSON.parse(localStorage.getItem("getTestingproject"))[0] : 0;

const getTestingproject = (state = initialState, action) => {

    switch(action.type){ 
      case "TESTINGPROJECT" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getTestingproject