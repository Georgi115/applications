import { ENTERTAPP, PUTAPPLICATION } from "../type/typeApplicationsReducer";
import { OPENCREATEAPPLICATION } from "../type/typeApplicationsReducer";
import { LOADING } from "../type/typeApplicationsReducer";
import { GETPRIORITIES } from "../type/typeApplicationsReducer";
import { GETUSERSANDSTATUSES } from "../type/typeApplicationsReducer";
import { CHANGEINPUT } from "../type/typeApplicationsReducer";
import { OPENCLOSECHANGEAPP } from "../type/typeApplicationsReducer";
import { CHANGEAPPLICATIONID } from "../type/typeApplicationsReducer";
import { OPENDROPBLOCKS } from "../type/typeApplicationsReducer";
import { CHANGEDATA } from "../type/typeApplicationsReducer";
import { CHANGEINPUTERROR } from "../type/typeApplicationsReducer";
import { INPUTSORT } from "../type/typeApplicationsReducer";

export const enterApp = (date) => {
  return {
    type: ENTERTAPP,
    payload: date,
  };
};
export const getPriorities = (data) => {
  return {
    type: GETPRIORITIES,
    payload: data,
  };
};

export const loading = () => {
  return {
    type: LOADING,
  };
};

export const openCreateApplication = (type) => {
  return {
    type: OPENCREATEAPPLICATION,
    payload: type,
  };
};

export const getUsersAndStatuses = (obj, type) => {
  return {
    type: GETUSERSANDSTATUSES,
    payload: obj,
    elem: type,
  };
};

export const changeInput = (str, type) => {
  return {
    type: CHANGEINPUT,
    payload: str,
    element: type,
  };
};
export const openCloseChangeApp = (boolean, id) => {
  return {
    type: OPENCLOSECHANGEAPP,
    payload: boolean,
    id: id,
  };
};

export const changeApplicationId = () => {
  return {
    type: CHANGEAPPLICATIONID,
  };
};

export const openDropBlocks = (elem) => {
  return {
    type: OPENDROPBLOCKS,
    payload: elem,
  };
};

export const changeData = (item, id, obj, obj2) => {
  return {
    type: CHANGEDATA,
    payload: item,
    id,
    obj,
    obj2,
  };
};

export const puTApplication = () => {
  return {
    type: PUTAPPLICATION,
  };
};

export const changeInputError = () => {
  return {
    type: CHANGEINPUTERROR,
  };
};

export const inputSort = (value) => {
  return {
    type: INPUTSORT,
    value,
  };
};
