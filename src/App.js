import React from "react";
import styled from "styled-components";

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

let scale = [
  {
    variable: `$font-size-xs`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-s`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-l`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-xl`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-2xl`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-3xl`,
    size: 1.2,
    lineHeight: 1.2
  },
  {
    variable: `$font-size-4xl`,
    size: 1.2,
    lineHeight: 1.2
  },
];

let x = ["hey", "you"];

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

    scale = [
      {
        variable: `$font-size-xs`,
        size: fontXs,
        lineHeight: fontXsLine
      },
      {
        variable: `$font-size-s`,
        size: fontS,
        lineHeight: fontSLine
      },
      {
        variable: `$font-size`,
        size: font,
        lineHeight: fontLine
      },
      {
        variable: `$font-size-l`,
        size: fontL,
        lineHeight: fontLLine
      },
      {
        variable: `$font-size-xl`,
        size: fontXl,
        lineHeight: fontXlLine
      },
      {
        variable: `$font-size-2xl`,
        size: font2xl,
        lineHeight: font2xlLine
      },
      {
        variable: `$font-size-3xl`,
        size: font3xl,
        lineHeight: font3xlLine
      },
      {
        variable: `$font-size-4xl`,
        size: font4xl,
        lineHeight: font4xlLine
      }
    ];
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
          rows={scale}
        >
        </StyledVariableTable>
      </div>
    );
  }
}

export default App;
