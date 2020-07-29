import React from "react";
import Nav from "../../nav";
import "./styles.css";
import TravelFilter from "./travel-filter";
import TravelTable from "./travel-table";
import NewButton from "../../newButton";

class Travels extends React.Component {
  render() {
    return (
      <div id="travelDiv">
        <Nav />
        <h1 id="travelHeader">Viagens</h1>
        <NewButton href="/newTravel">Nova Viagem</NewButton>
        <TravelFilter />
        <TravelTable />
      </div>
    );
  }
}

export default Travels;
