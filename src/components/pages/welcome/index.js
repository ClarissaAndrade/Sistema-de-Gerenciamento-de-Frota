import React from "react";
import Nav from "../../nav";
import "./styles.css";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div id="mainDiv">
          <h1 id="mainH1">Sistema de Gerenciamento de Frota</h1>
        </div>
      </>
    );
  }
}

export default Welcome;
