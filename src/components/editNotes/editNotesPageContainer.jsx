import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as axios from "axios";
import EditNote from "./editNotesPage";
import { setDataName, setDataNotes } from "../../redux/homePage-reducer";

class EditNotesContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.id;

    axios.get(`http://localhost:3001/notes/` + userId).then((response) => {
      this.props.setDataName(response.data);
    });
  }

  addNotesData = (id, name, home) => {
    axios
      .put(`http://localhost:3001/notes/${id}`, { name: name })
      .then((response) => {
        if (response.statusText === "OK") {
          axios.get(`http://localhost:3001/notes/`).then((response) => {
            this.props.setDataNotes(response.data);
            home();
          });
        }
      });
  };

  render() {
    return (
      <EditNote
        oneNotes={this.props.oneNotes}
        setName={this.props.setDataName}
        addNotesData={this.addNotesData}
        id={this.props.match.params.id}
        language={
          this.props.isFetching == "en"
            ? this.props.en.tableValue
            : this.props.ru.tableValue
        }
      />
    );
    /* return <Profile {...this.state} profile={this.props.profile} />; */
  }
}

let mapStateToProps = (state) => {
  return {
    oneNotes: state.homePage.oneNotes,
    isFetching: state.homePage.isFetching,
    en: state.homePage.en,
    ru: state.homePage.ru,
  };
};

let withUrlDataContainerComponent = withRouter(EditNotesContainer);

export default connect(mapStateToProps, { setDataName, setDataNotes })(
  withUrlDataContainerComponent
);
