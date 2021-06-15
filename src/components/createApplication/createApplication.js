import React from "react";
import "./createApplication.scss";
import { connect } from "react-redux";
import { openCreateApplication } from "../../redux/actionCreator/actionCreatorApplicationReducer";
import { changeInput } from "../../redux/actionCreator/actionCreatorApplicationReducer";
import { postAllication } from "../../redux/actionCreator/asyncActionCreator";

const CreateApplication = (props) => {
  const {
    openCreateApplication,
    closeCreateApp,
    descriptionApplication,
    nameApplication,
    changeInput,
    clickPostAllication,
    inputError,
  } = props;

  return (
    <div
      className={
        openCreateApplication
          ? "createApplication createApplication_active"
          : "createApplication"
      }
    >
      <div className="createApplication__title">
        <p>Новая заявка</p>
        <i
          onClick={() => closeCreateApp("close")}
          className="fa fa-close fa-1x"
        ></i>
      </div>
      <div className="createApplication__form">
        <div className="createApplication__inputName">
          <p>
            Название
            {inputError ? <span style={{ color: "red" }}>*</span> : null}
          </p>
          <input
            className={inputError ? "borderError" : null}
            onChange={(e) => changeInput(e.target.value, "nameApplication")}
            value={nameApplication}
          ></input>
        </div>
        <div className="createApplication__inputDescription">
          <p>
            Описание
            {inputError ? <span style={{ color: "red" }}>*</span> : null}
          </p>
          <input
            className={inputError ? "borderError" : null}
            onChange={(e) =>
              changeInput(e.target.value, "descriptionApplication")
            }
            value={descriptionApplication}
          ></input>
        </div>
        <div className="createApplication__btn">
          <button
            onClick={() =>
              clickPostAllication(nameApplication, descriptionApplication)
            }
          >
            Сохранить
          </button>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    openCreateApplication: state.applicationsReducer.openCreateApplication,
    nameApplication: state.applicationsReducer.nameApplication,
    descriptionApplication: state.applicationsReducer.descriptionApplication,
    inputError: state.applicationsReducer.changeInputError,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    closeCreateApp: (type) => dispatch(openCreateApplication(type)),
    changeInput: (str, type) => dispatch(changeInput(str, type)),
    clickPostAllication: (name, decription) =>
      dispatch(postAllication(name, decription)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApplication);
