import React from "react";
import "./applicationsPage.scss";
import Preloader from "../preloader/preloader";
import { useEffect } from "react";
import { connect } from "react-redux";
import { EnterApp } from "../../redux/actionCreator/asyncActionCreator";
import ErrorComponent from "../errorComponent/errorComponent";
import CreateApplication from "../createApplication/createApplication";
import { openCreateApplication } from "../../redux/actionCreator/actionCreatorApplicationReducer";
import { geTPriorities } from "../../redux/actionCreator/asyncActionCreator";
import { getUserSAndStatuses } from "../../redux/actionCreator/asyncActionCreator";
import { openCloseChangeApp } from "../../redux/actionCreator/actionCreatorApplicationReducer";
import ChangeApplication from "../changeApplication/changeApplication";
import { inputSort } from "../../redux/actionCreator/actionCreatorApplicationReducer";

const ApplicationsPage = (props) => {
  const {
    allApplications,
    enterrApp,
    loading,
    priorities,
    openCreateApplication,
    getPriorities,
    getUsersAndStatuses,
    openChangeApp,
    sortInput,
    inputValue,
    sortApplication,
  } = props;
  const applications = sortApplication || allApplications;

  useEffect(() => {
    enterrApp();
    getUsersAndStatuses();
    getPriorities();
  }, []);
  if (loading) return <Preloader></Preloader>;
  if (!allApplications) return <ErrorComponent></ErrorComponent>;
  return (
    <div className="applicationsPage">
      <div className="searchBlock">
        <div className="searchBlock__input">
          <div className="searchBlock__blockInput">
            <input
              value={inputValue}
              onChange={(e) => sortInput(e.target.value.trim())}
              className="searchBlock__search"
            ></input>
            <i className="fa fa-search searchBlock__fa-search"></i>
          </div>
        </div>
      </div>
      {applications.allId.length ? (
        <div className="applicationsPage__main">
          <CreateApplication />
          <ChangeApplication></ChangeApplication>
          <div className="applicationsPage__bnt">
            <button onClick={() => openCreateApplication("open")}>
              Создать заявку
            </button>
          </div>
          <div className="applicationsPage__listTitle">
            <div className="applicationsPage__titleId">
              <p>ID</p>
            </div>
            <div className="applicationsPage__titleName">
              <p>Название</p>
            </div>
            <div className="applicationsPage__titleStatus">
              <p>Статус</p>
            </div>
            <div className="applicationsPage__titleExecutor">
              <p>Исполнитель</p>
            </div>
          </div>
          <div className="applicationsPage__listItemBlock">
            <ul>
              {applications.allId.map((id) => {
                return (
                  <li
                    onClick={() => openChangeApp(true, id)}
                    style={{
                      borderLeft: `6px solid ${
                        priorities[allApplications[id].priorityId].rgb
                      }`,
                    }}
                    key={id}
                    className="applicationsPage__listItem"
                  >
                    <div className="applicationsPage__itemId">
                      <p>{allApplications[id].id}</p>
                    </div>
                    <div className="applicationsPage__itemName">
                      <p>{allApplications[id].name}</p>
                    </div>
                    <div className="applicationsPage__itemStatus">
                      <p
                        style={{
                          backgroundColor: `${allApplications[id].statusRgb}`,
                        }}
                      >
                        {allApplications[id].statusName}
                      </p>
                    </div>
                    <div className="applicationsPage__itemExecutor">
                      <p>{allApplications[id].executorName}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>Нет заявок по вашему запросу</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    allApplications: state.applicationsReducer.allApplications,
    requestError: state.applicationsReducer.requestError,
    loading: state.applicationsReducer.loading,
    priorities: state.applicationsReducer.priorities,
    inputValue: state.applicationsReducer.inputSort,
    sortApplication: state.applicationsReducer.sortApplication,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    enterrApp: () => dispatch(EnterApp()),
    openCreateApplication: (type) => dispatch(openCreateApplication(type)),
    getPriorities: () => dispatch(geTPriorities()),
    getUsersAndStatuses: () => dispatch(getUserSAndStatuses()),
    openChangeApp: (boolean, id) => dispatch(openCloseChangeApp(boolean, id)),
    sortInput: (value) => dispatch(inputSort(value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationsPage);
