import React from "react";
import "./dropBlockStatus.scss";
import { connect } from "react-redux";
import { changeData } from "../../../redux/actionCreator/actionCreatorApplicationReducer";

const DropBlockStatus = (props) => {
  const { dropStatusBlock, statuses, idx, changeData } = props;

  return (
    <div
      className={
        dropStatusBlock
          ? " DropBlockStatus   DropBlockStatus__active"
          : "DropBlockStatus"
      }
    >
      <ul>
        {statuses.allId.map((id) => {
          return (
            <li
              onClick={() => changeData(statuses[id], idx, "dropBlockStatus")}
              className="DropBlockStatus__item"
              key={id}
            >
              <div
                style={{ backgroundColor: `${statuses[id].rgb}` }}
                className="cirkle"
              ></div>
              <p>{statuses[id].name} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    statuses: state.applicationsReducer.statuses,
    dropStatusBlock: state.applicationsReducer.dropStatusBlock,
    idx: state.applicationsReducer.changeApplicationId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeData: (item, id, obj, obj2) =>
      dispatch(changeData(item, id, obj, obj2)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DropBlockStatus);
