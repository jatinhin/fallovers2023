 
let initialState = JSON.parse(localStorage.getItem("GETPENDINGVERFIEDSIGN"))!=undefined ? JSON.parse(localStorage.getItem("getpendingverfiedSign"))[0] : 0;

const getpendingverfiedSign = (state = initialState, action) => {

    switch(action.type){ 
      case "GETPENDINGVERFIEDSIGN" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
  }
}

export default getpendingverfiedSign