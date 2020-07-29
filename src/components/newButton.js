import React from "react";
import { Link } from "react-router-dom";
import "./newButton.css";

class NewButton extends React.Component {
  render() {
    return (
      <Link to="/newTravel" id="newButton">
        {this.props.children}
      </Link>
    );
  }
}

export default NewButton;
