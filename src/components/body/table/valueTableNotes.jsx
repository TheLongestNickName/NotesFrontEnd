import React from "react";
import { useHistory } from "react-router-dom";
import s from "./valueTableNotes.module.css";

let ValueTableNotes = (props) => {
  let history = useHistory();
  let moveToEdit = (id) => {
    history.push(`/edit/` + id);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td className={props.isFetching == "ru" ? s.td2 : ""}>
        <button
          onClick={() => {
            moveToEdit(props.id);
          }}
        >
          {props.language.edit}
        </button>
        <button
          onClick={() => {
            props.deleteNotes(props.id);
          }}
        >
          {props.language.delete}
        </button>
      </td>
    </tr>
  );
};

export default ValueTableNotes;
