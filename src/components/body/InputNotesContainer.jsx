import React from "react";
import s from "./InputNotesContainer.module.css";
import { connect } from "react-redux";
import * as axios from "axios";
import { setDataNotes, setInputValue } from "../../redux/homePage-reducer";

class InputNotesContainer extends React.PureComponent {
  /* componentDidMount() {
    axios.get(`http://localhost:3001/notes/`).then((response) => {
      this.props.setDataNotes(response.data);
    });
  } */

  addNotes = (name) => {
    axios
      .post(`http://localhost:3001/notes/`, { name: name })
      .then((response) => {
        if (response.statusText === "OK") {
          axios.get(`http://localhost:3001/notes/`).then((response) => {
            this.props.setDataNotes(response.data);
          });
        }
      });
  };

  ListenInpValue = React.createRef();

  changeInput = () => {
    this.props.setInputValue(this.ListenInpValue.current.value);
  };

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.setInputValue(event.target.value);
      let value = this.props.inputValue;
      this.addNotes(value);
      this.props.setInputValue(" ");
    }
  };
  render() {
    return (
      <div className={s.wrap}>
        <p>Take your notes </p>
        <input
          className={s.inp}
          value={this.props.inputValue}
          onChange={this.changeInput}
          placeholder=" Take your notes"
          ref={this.ListenInpValue}
          onKeyPress={this.onKeyPress}
          type="text"
        />
        <button
          className={s.button}
          onClick={() => {
            this.addNotes(this.props.inputValue);
            this.props.setInputValue("");
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    inputValue: state.homePage.inputValue,
  };
};

export default connect(mapStateToProps, { setDataNotes, setInputValue })(
  InputNotesContainer
);
