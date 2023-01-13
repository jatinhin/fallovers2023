
let initialState = JSON.parse(localStorage.getItem("getdailyperformanceReport"))!=undefined ? JSON.parse(localStorage.getItem("getdailyperformanceReport"))[0] : 0;

const getdailyperformanceReport = (state = initialState, action) => {

    switch(action.type){ 
      case "GETDAILYPERFORMANCEREPORT" : return action.parm;
      case "RESET": return initialState; //Always return the initial state
      default : return state;
   }
}

export default getdailyperformanceReport