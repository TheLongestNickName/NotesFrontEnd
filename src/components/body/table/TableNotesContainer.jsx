import React from "react";
import ValueTableNotes from "./valueTableNotes";
import { connect } from "react-redux";
import { setDataNotes } from "../../../redux/homePage-reducer";
import s from "./tableNotes.module.css";
import * as axios from "axios";

class TableNotesContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:3001/notes/`).then((response) => {
      this.props.setDataNotes(response.data);
    });
  }

  deleteNotes = (id) => {
    axios.delete(`http://localhost:3001/notes/` + id).then((response) => {
      if (response.statusText === "OK") {
        axios.get(`http://localhost:3001/notes/`).then((response) => {
          this.props.setDataNotes(response.data);
        });
      }
    });
  };

  render() {
    return (
      <div className={s.wrap}>
        <table>
          <tr>
            <th>Your notes</th>
            <th>Action</th>
          </tr>
          {this.props.notes.map((n) => {
            return (
              <ValueTableNotes
                editNotes={this.editNotes}
                deleteNotes={this.deleteNotes}
                key={n.id}
                id={n.id}
                name={n.name}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { notes: state.homePage.notes };
};

export default connect(mapStateToProps, { setDataNotes })(TableNotesContainer);
