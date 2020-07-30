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
        <p>
          {this.props.isFetching == "en"
            ? this.props.en.inputName.title
            : this.props.ru.inputName.title}
        </p>
        <input
          className={s.inp}
          value={this.props.inputValue}
          onChange={this.changeInput}
          placeholder={
            this.props.isFetching == "en"
              ? this.props.en.inputName.placeHolder
              : this.props.ru.inputName.placeHolder
          }
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
          {this.props.isFetching == "en"
            ? this.props.en.inputName.btn
            : this.props.ru.inputName.btn}
        </button>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    inputValue: state.homePage.inputValue,
    isFetching: state.homePage.isFetching,
    en: state.homePage.en,
    ru: state.homePage.ru,
  };
};

export default connect(mapStateToProps, { setDataNotes, setInputValue })(
  InputNotesContainer
);
