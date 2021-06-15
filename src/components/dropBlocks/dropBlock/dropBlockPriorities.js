import React from "react";
import "./dropBlockPriorities.scss";
import { connect } from "react-redux";
import { changeData } from "../../../redux/actionCreator/actionCreatorApplicationReducer";

const DropBlockPriorities = (props) => {
  const { priorities, dropPrioritiesBlock, idx, changeData } = props;

  return (
    <div
      className={
        dropPrioritiesBlock
          ? " DropBlockPriorities   DropBlockPriorities__active"
          : "DropBlockPriorities"
      }
    >
      <ul>
        {priorities.allId.map((id) => {
          return (
            <li
              onClick={() =>
                changeData(priorities[id], idx, "dropBlockPriorities")
              }
              className="DropBlockPriorities__item"
              key={id}
            >
              <p>{priorities[id].name} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    priorities: state.applicationsReducer.priorities,
    dropPrioritiesBlock: state.applicationsReducer.dropPrioritiesBlock,
    idx: state.applicationsReducer.changeApplicationId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeData: (item, id, obj, obj2) =>
      dispatch(changeData(item, id, obj, obj2)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropBlockPriorities);
