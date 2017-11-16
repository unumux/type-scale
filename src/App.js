import React from "react";
import styled from "styled-components";

import { columnsArray, rowsArray } from "./data/tableData";
import { VariableForm } from "./VariableForm";
import { VariableTable } from "./VariableTable";

// adjust to have better IDs on the elements produced... maybe an obj with a name and id prop
const inputsArray = ["Ratio", "Min Font Size", "Max Font Size", "Min Line Height", "Max Line Height"];

const StyledVariableForm = styled(VariableForm)`
  background-color: #999;
`;

const StyledVariableTable = styled(VariableTable)`
  text-align: center;
`;

class App extends React.Component {
  calculate(e) {
    e.preventDefault();

    let ratioVal = document.querySelector("#Ratio").value || 0;
    let minFontVal = document.querySelector("#MinFontSize").value || 0;
    let maxFontVal = document.querySelector("#MaxFontSize").value || 0;
    let minLineVal = document.querySelector("#MinLineHeight").value || 0;
    let maxLineVal = document.querySelector("#MaxLineHeight").value || 0;
    
    let fontXs = minFontVal * ratioVal;
    let fontS = fontXs * ratioVal;
    let font = fontS * ratioVal;
    let fontL = font * ratioVal;
    let fontXl = fontL * ratioVal;
    let font2xl = fontXl * ratioVal;
    let font3xl = font2xl * ratioVal;
    let font4xl = font3xl * ratioVal;

    let increment = (maxLineVal - minLineVal) / (maxFontVal - minFontVal);

    let fontXsLine = +minLineVal + ((maxFontVal - fontXs) * increment);
    let fontSLine = +minLineVal + ((maxFontVal - fontS) * increment);
    let fontLine = +minLineVal + ((maxFontVal - font) * increment);
    let fontLLine = +minLineVal + ((maxFontVal - fontL) * increment);
    let fontXlLine = +minLineVal + ((maxFontVal - fontXl) * increment);
    let font2xlLine = +minLineVal + ((maxFontVal - font2xl) * increment);
    let font3xlLine = +minLineVal + ((maxFontVal - font3xl) * increment);
    let font4xlLine = +minLineVal + ((maxFontVal - font4xl) * increment);
  }

  render() {
    return (
      <div className="App">
        <StyledVariableForm 
          inputs={inputsArray} 
          calculate={this.calculate}
        >
        </StyledVariableForm>
        <StyledVariableTable
          columns={columnsArray}
          rows={rowsArray}
        >
        </StyledVariableTable>
      </div>
    );
  }
}

export default App;
