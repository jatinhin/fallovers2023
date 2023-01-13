

let initialState = JSON.parse(localStorage.getItem("getemployeewiseReport"))!=undefined ? JSON.parse(localStorage.getItem("getemployeewiseReport"))[0] : 0;

const getemployeewiseReport = (state = initialState, action) => {

    switch(action.type){ 
      case "GETEMPLOYEEWISEREPORT" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getemployeewiseReport