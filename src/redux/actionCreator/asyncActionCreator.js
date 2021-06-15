import Service from "../../service/service";
import { enterApp } from "../actionCreator/actionCreatorApplicationReducer";
import { getPriorities } from "../actionCreator/actionCreatorApplicationReducer";
import { loading } from "../actionCreator/actionCreatorApplicationReducer";
import { getUsersAndStatuses } from "../actionCreator/actionCreatorApplicationReducer";
import { openCreateApplication } from "../actionCreator/actionCreatorApplicationReducer";
import { changeApplicationId } from "../actionCreator/actionCreatorApplicationReducer";
import { puTApplication } from "../actionCreator/actionCreatorApplicationReducer";
import { changeInputError } from "../actionCreator/actionCreatorApplicationReducer";
const service = new Service();
export const EnterApp = () => {
  return (dispatch) => {
    dispatch(loading());
    service.getApplications().then((res) => {
      dispatch(enterApp(res));
    });
  };
};
export const geTPriorities = () => {
  return (dispatch) => {
    service.getPriorities().then((res) => dispatch(getPriorities(res)));
  };
};

export const getUserSAndStatuses = () => {
  return (dispatch) => {
    service
      .getUsers()
      .then((res) => dispatch(getUsersAndStatuses(res, "users")));
    service
      .getStatuses()
      .then((res) => dispatch(getUsersAndStatuses(res, "statuses")));
  };
};

export const postAllication = (name, description) => {
  return (dispatch) => {
    if (name.trim() === "" && description.trim() === "") {
      dispatch(changeInputError());
      return;
    }
    service
      .postApplication({
        name,
        description,
        statusId: 81904,
      })
      .then(() =>
        service.getApplications().then((res) => {
          dispatch(enterApp(res));
          dispatch(changeApplicationId());
        })
      );
    dispatch(openCreateApplication());
  };
};

export const putApplication = (obj) => {
  return (dispatch) => {
    service.putApplication(obj).then((res) =>
      service.getApplications().then((res) => {
        dispatch(enterApp(res));
        dispatch(puTApplication());
      })
    );
  };
};
