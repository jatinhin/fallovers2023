

let initialState = JSON.parse(localStorage.getItem("getfitlerMap"))!=undefined ? JSON.parse(localStorage.getItem("getfitlerMap"))[0] : 0;

const getfitlerMap = (state = initialState, action) => {

    switch(action.type){ 
      case "GETFILTERMAP" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getfitlerMap