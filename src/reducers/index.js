import changeTheNumber from "./upDown";
import setUserlog from "./setUser";
import setUserCart from "./userCart";
import setSelectMenu from "./selectMenu";
import setfullSize from "./fullSize";
import setmainProjects from "./mainProjects";
import setDesignation from "./getDesignation";
import setDivision from "./getDivision";
import setZone from "./getZone";
import setTestingproject from "./getTestingproject";
import setprojectwiseReport from "./getprojectwiseReport";
import setemployeewiseReport from "./getemployeewiseReport";
import setDashboard from "./getDashboard";
import setProject from "./getProject";
import setRefresh from "./getRefresh";
import setFilter from "./getFilter";
import setAssignform from "./getAssignform";
import setassignProjects from "./getassignProjects";
import setdailyperformanceReport from "./getdailyperformanceReport";
import setAssignreport from "./getAssignreport";
import setpendingverfiedSign from "./getpendingverfiedSign";
import setfitlerMap from "./getfitlerMap";
import setRfi from "./rfi";
import category from "./category";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    changeTheNumber,
    setUserlog,
    setUserCart,
    setSelectMenu,
    setfullSize,
    setmainProjects,
    setDesignation,
    setDivision,
    setZone,
    setTestingproject,
    setprojectwiseReport,
    setemployeewiseReport,
    setDashboard,
    setProject,
    setRefresh,
    setFilter,
    setAssignform,
    setassignProjects,
    setdailyperformanceReport,
    setAssignreport,
    setpendingverfiedSign,
    setfitlerMap,
    setRfi,
    category,
})

export default rootReducer;

