
let initialState = "";

const getFilter = (state = initialState, action) => {

     switch(action.type){ 
       case "GETFILTER" : return action.parm;
       case "RESET": return initialState; //Always return the initial state
       default : return state;
   }
}

export default getFilter