
const initialState = 0;
 
const setUserlog = (state = initialState, action) => {

    switch(action.type){ 
      case "CARTPRODUCT" : return action.parm;
      default : return state;
  }
}

export default setUserlog