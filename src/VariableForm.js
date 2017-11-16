import React from "react";
import styled from "styled-components";

import { removeSpaces } from "./scripts/removeSpaces";

const Form = styled.form`
    margin: 0 auto;
    padding: 50px;
    width: 500px;
`;

const Label = styled.label`
    color: white;
    margin-right: 5px;
`;

const Input = styled.input`
    margin-right: 10px;
`;

const InputGroupContainer = styled.div`
    margin-bottom: 10px;
`;

export const VariableForm = props =>
    <Form className={props.className}>
        {
            props.inputs.map(item => {
                return (
                    <InputGroup name={item} key={item} />
                );
            })
        }
        <button onClick={() => {
            let x = [];
            props.calculate(x)
        }
        }>Calculate</button>
    </Form>

export const InputGroup = props =>
    <InputGroupContainer key={props.name}>
        <Label htmlFor={props.name}>{props.name}: </Label><Input id={removeSpaces(props.name)} type="number" placeholder="1.0" step="0.1" min="1" max="5"/>
    </InputGroupContainer>

export default { VariableForm, InputGroup };
