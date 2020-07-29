import React from "react";
import FormButton from "../../formButton";
import "./travel-filter.css";

class TravelFilter extends React.Component {
  render() {
    return (
      <div id="travelFilterDiv">
        <h1 id="travelFilterHeader">Buscar</h1>
        <form id="travel-filter">
          <label for="truck" class="TF">
            Caminhão:
          </label>
          <select id="dropdown" name="truck">
            <option disabled value selected>
              Selecione uma opção
            </option>
            <option>EKH</option>
            <option>GKI</option>
            <option>EWQ</option>
            <option>GPM</option>
            <option>CLU</option>
          </select>
          <br />
          <label for="dateFrom" class="TF">
            De:
          </label>
          <input type="date" name="dateFrom" id="dateFrom" />

          <label for="dateTo" class="TF">
            Até:
          </label>
          <input type="date" name="dateTo" id="dateTo" />
          <br />
          <label for="city" class="TF">
            Cidade:
          </label>
          <input type="text" name="city" id="city" />
          <FormButton>Buscar</FormButton>
        </form>
      </div>
    );
  }
}

export default TravelFilter;
