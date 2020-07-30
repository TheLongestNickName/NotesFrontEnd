import React from "react";
import { useHistory } from "react-router-dom";
import s from "./editNotesPage.module.css";
let EditNote = (props) => {
  if (!props.oneNotes.name) {
  }

  let ListenInpValue = React.createRef();
  let historyUrl = useHistory();

  let SaveAndHome = () => {
    historyUrl.push("/");
  };
  let backHome = () => {
    historyUrl.push("/");
  };

  return (
    <div className={s.wrap}>
      <input
        ref={ListenInpValue}
        onChange={() => {
          props.setName(ListenInpValue.current.value);
        }}
        value={props.oneNotes.name}
      ></input>
      <button
        onClick={() => {
          props.addNotesData(props.id, props.oneNotes, SaveAndHome);
        }}
      >
        {props.language.action.save}
      </button>
      <button
        onClick={() => {
          backHome();
        }}
      >
        {props.language.action.cancel}
      </button>
    </div>
  );
};

export default EditNote;
