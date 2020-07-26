import React from "react";
import { useHistory } from "react-router-dom";

let ValueTableNotes = (props) => {
  let history = useHistory();
  let moveToEdit = (id) => {
    history.push(`/edit/` + id);
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>
        <button
          onClick={() => {
            moveToEdit(props.id);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => {
            props.deleteNotes(props.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ValueTableNotes;
