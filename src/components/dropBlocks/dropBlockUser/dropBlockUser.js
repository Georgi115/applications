import React from "react";
import "./dropBlockUser.scss";
import { connect } from "react-redux";
import { changeData } from "../../../redux/actionCreator/actionCreatorApplicationReducer";

const DropBlockUser = (props) => {
  const { users, dropUserBlock, idx, changeData } = props;

  return (
    <div
      className={
        dropUserBlock
          ? " DropBlockUser   DropBlockUser__active"
          : "DropBlockUser"
      }
    >
      <ul>
        {users.allId.map((id) => {
          return (
            <li
              onClick={() => changeData(users[id], idx, "dropBlockUser")}
              className="DropBlockUser__item"
              key={id}
            >
              <p>{users[id].name} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.applicationsReducer.users,
    dropUserBlock: state.applicationsReducer.dropUserBlock,
    idx: state.applicationsReducer.changeApplicationId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeData: (item, id, obj, obj2) =>
      dispatch(changeData(item, id, obj, obj2)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropBlockUser);
