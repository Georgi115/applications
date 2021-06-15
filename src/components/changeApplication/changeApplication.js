import React from "react";
import "./changeApplication.scss";
import {
  openCloseChangeApp,
  openDropBlocks,
} from "../../redux/actionCreator/actionCreatorApplicationReducer";
import { connect } from "react-redux";
import DropBlockStatus from "../dropBlocks/dropBlockStatus/dropBlockStatus";
import DropBlockUser from "../dropBlocks/dropBlockUser/dropBlockUser";
import DropBlockPriorities from "../dropBlocks/dropBlock/dropBlockPriorities";
import { putApplication } from "../../redux/actionCreator/asyncActionCreator";
import { commentInput } from "../../redux/actionCreator/actionCreatorApplicationReducer";
const ChangeApplication = (props) => {
  const {
    openChangeApp,
    changeApp,
    id,
    allApplications,
    OpenDropBlocks,
    saveApplication,
    commentInput,
  } = props;
  console.log(allApplications);
  if (id === null)
    return (
      <div
        className={
          openChangeApp
            ? "changeApplication changeApplication_active"
            : "changeApplication"
        }
      ></div>
    );

  return (
    <div
      className={
        openChangeApp
          ? "changeApplication changeApplication_active"
          : "changeApplication"
      }
    >
      <div className="changeApplication__title">
        <div>
          <p>№{allApplications[id].id}</p>
          <p>{allApplications[id].name}</p>
        </div>

        <i onClick={() => changeApp(false)} className="fa fa-close fa-1x"></i>
      </div>
      <div className="changeApplication__main">
        <div className="changeApplication__infoApplication">
          <div className="changeApplication__description">
            <h2>Описание</h2>
            <p>{allApplications[id].description}</p>
          </div>
          <div className="changeApplication__commentInput"></div>
          <div className="changeApplication__btn">
            <button
              onClick={() =>
                saveApplication({
                  id: allApplications[id].id,
                  statusId: allApplications[id].statusId,
                  priorityId: allApplications[id].priorityId,
                  executorId: allApplications[id].executorId,
                  comment: commentInput,
                })
              }
            >
              Сохранить
            </button>
          </div>
        </div>
        <div className="intelligence">
          <div className="intelligence__status">
            <DropBlockStatus></DropBlockStatus>
            <div
              style={{ backgroundColor: `${allApplications[id].statusRgb}` }}
              className="cirkle"
            ></div>
            <p
              onClick={() => OpenDropBlocks("dropStatusBlock")}
              className="intelligence__statusP"
            >
              {allApplications[id].statusName}
            </p>
          </div>
          <div className="intelligence__user">
            <DropBlockUser></DropBlockUser>
            <p className="intelligence__executor"> Исполнитель</p>
            <p
              onClick={() => OpenDropBlocks("dropUserBlock")}
              className="intelligence__name"
            >
              {allApplications[id].executorName}
            </p>
          </div>
          <div className="intelligence__priorities">
            <DropBlockPriorities></DropBlockPriorities>
            <p className="intelligence__prioritiesP">Приоритет</p>
            <p
              onClick={() => OpenDropBlocks("dropPrioritiesBlock")}
              className="intelligence__elem"
            >
              {allApplications[id].priorityName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    openChangeApp: state.applicationsReducer.openChangeApp,
    id: state.applicationsReducer.changeApplicationId,
    allApplications: state.applicationsReducer.allApplications,
    dropStatusBlock: state.applicationsReducer.dropStatusBlock,
    commentInput: state.applicationsReducer.commentInput,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeApp: (boolean) => dispatch(openCloseChangeApp(boolean)),
    OpenDropBlocks: (elem) => dispatch(openDropBlocks(elem)),
    saveApplication: (obj) => dispatch(putApplication(obj)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangeApplication);
