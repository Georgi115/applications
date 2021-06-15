import { ENTERTAPP, OPENDROPBLOCKS } from "../type/typeApplicationsReducer";
import { OPENCREATEAPPLICATION } from "../type/typeApplicationsReducer";
import { LOADING } from "../type/typeApplicationsReducer";
import { GETPRIORITIES } from "../type/typeApplicationsReducer";
import { GETUSERSANDSTATUSES } from "../type/typeApplicationsReducer";
import { CHANGEINPUT } from "../type/typeApplicationsReducer";
import { OPENCLOSECHANGEAPP } from "../type/typeApplicationsReducer";
import { CHANGEAPPLICATIONID } from "../type/typeApplicationsReducer";
import { CHANGEDATA } from "../type/typeApplicationsReducer";
import { PUTAPPLICATION } from "../type/typeApplicationsReducer";
import { CHANGEINPUTERROR } from "../type/typeApplicationsReducer";
import { INPUTSORT } from "../type/typeApplicationsReducer";

const initialState = {
  allApplications: null,
  requestError: false,
  loading: false,
  openCreateApplication: false,
  priorities: null,
  users: null,
  statuses: null,
  nameApplication: "",
  descriptionApplication: "",
  changeInputError: false,
  openChangeApp: false,
  changeApplicationId: null,
  dropStatusBlock: false,
  dropUserBlock: false,
  dropPrioritiesBlock: false,
  commentInput: "",
  initialAllApp: null,
  inputSort: "",
  sortApplication: null,
};

function applicationsReducer(state = initialState, action) {
  switch (action.type) {
    case GETPRIORITIES:
      const allIdPriorities = [];
      const priorities = action.payload.reduce((item, obj) => {
        item[obj.id] = obj;
        allIdPriorities.push(obj.id);
        return item;
      }, {});
      priorities.allId = allIdPriorities;
      return {
        ...state,
        priorities,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ENTERTAPP:
      const allId = [];
      const allApplications = action.payload.reduce((item, obj) => {
        item[obj.id] = obj;
        allId.push(obj.id);
        return item;
      }, {});
      allApplications.allId = allId;

      return {
        ...state,
        allApplications,
        loading: false,
      };
    case OPENCREATEAPPLICATION:
      if (action.payload === "open") {
        return {
          ...state,
          openCreateApplication: true,
          nameApplication: "",
          descriptionApplication: "",
        };
      }
      return {
        ...state,
        openCreateApplication: false,
      };

    case GETUSERSANDSTATUSES:
      const allIdElem = [];
      const element = action.payload.reduce((item, obj) => {
        item[obj.id] = obj;
        allIdElem.push(obj.id);
        return item;
      }, {});
      element.allId = allIdElem;

      return {
        ...state,
        [action.elem]: element,
      };
    case CHANGEINPUT:
      return {
        ...state,
        changeInputError: false,
        [action.element]: action.payload,
      };

    case OPENCLOSECHANGEAPP:
      if (action.payload === false) {
        let copyObj = JSON.parse(JSON.stringify(state.initialAllApp));
        return {
          ...state,
          openChangeApp: action.payload,
          changeApplicationId: null,
          dropStatusBlock: false,
          dropUserBlock: false,
          dropPrioritiesBlock: false,
          allApplications: copyObj,
          commentInput: "",
        };
      }
      let copyObj = JSON.parse(JSON.stringify(state.allApplications));
      return {
        ...state,
        openChangeApp: action.payload,
        changeApplicationId: action.id,
        initialAllApp: copyObj,
      };
    case CHANGEAPPLICATIONID:
      return {
        ...state,
        openChangeApp: true,
        changeApplicationId:
          state.allApplications.allId[state.allApplications.allId.length - 1],
      };
    case OPENDROPBLOCKS:
      return {
        ...state,
        dropStatusBlock: false,
        dropUserBlock: false,
        dropPrioritiesBlock: false,
        [action.payload]: true,
      };

    case CHANGEDATA:
      const applications = {
        ...state.allApplications,
      };
      if (action.obj === "dropBlockPriorities") {
        applications[action.id].priorityId = action.payload.id;
        applications[action.id].priorityName = action.payload.name;
      } else if (action.obj === "dropBlockStatus") {
        applications[action.id].statusId = action.payload.id;
        applications[action.id].statusName = action.payload.name;
        applications[action.id].statusRgb = action.payload.rgb;
      } else if (action.obj === "dropBlockUser") {
        applications[action.id].executorId = action.payload.id;
        applications[action.id].executorName = action.payload.name;
      }

      return {
        ...state,
        allApplications: applications,
        dropStatusBlock: false,
        dropUserBlock: false,
        dropPrioritiesBlock: false,
      };
    case PUTAPPLICATION:
      return {
        ...state,
        dropStatusBlock: false,
        dropUserBlock: false,
        dropPrioritiesBlock: false,
        openChangeApp: false,
        openCreateApplication: false,
        commentInput: "",
      };

    case CHANGEINPUTERROR:
      return {
        ...state,
        changeInputError: true,
      };

    case INPUTSORT:
      const idAll = [];
      const appLic = {
        ...state.allApplications,
      };

      const obj = appLic.allId.reduce((prev, el) => {
        if (
          appLic[el].name.toLowerCase().includes(action.value.toLowerCase())
        ) {
          idAll.push(appLic[el].id);
          prev[appLic[el].id] = appLic[el];
        }
        return prev;
      }, {});
      obj.allId = idAll;

      return {
        ...state,
        inputSort: action.value,
        sortApplication: action.value === "" ? null : obj,
      };
    default:
      return {
        ...state,
      };
  }
}

export default applicationsReducer;
