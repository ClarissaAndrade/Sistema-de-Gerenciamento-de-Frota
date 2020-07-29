import React from "react";

class FormButton extends React.Component {
  render() {
    return (
      <button type="submit" class="btn btn-dark">
        {this.props.children}
      </button>
    );
  }
}

export default FormButton;
