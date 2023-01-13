
let initialState = JSON.parse(localStorage.getItem("getAssignreport"))!=undefined ? JSON.parse(localStorage.getItem("getAssignreport"))[0] : 0;

const getAssignreport = (state = initialState, action) => {

     switch(action.type){ 
       case "GETASSIGNREPORT" : return action.parm;
       case "RESET": return initialState; //Always return the initial state
       default : return state;
   }
}

export default getAssignreport