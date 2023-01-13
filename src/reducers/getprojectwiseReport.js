
let initialState = JSON.parse(localStorage.getItem("getprojectwiseReport"))!=undefined ? JSON.parse(localStorage.getItem("getprojectwiseReport"))[0] : 0;

const getprojectwiseReport = (state = initialState, action) => {

    switch(action.type){ 
      case "GETPROJECTWISEREPORT" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
   }
}

export default getprojectwiseReport