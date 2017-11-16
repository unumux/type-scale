import React from "react";
import styled from "styled-components";

const Table = styled.table`
    border: 1px solid #999;
    border-collapse: collapse;
    margin: 20px auto;
    text-align: left;
    width: 500px;
`;

const Row = styled.tr`

`;

export const VariableTable = props => 
    <Table>
        <thead>
            <tr>
                <th>Variable</th>
                <th>Font Size</th>
                <th>Line Height</th>
            </tr>
        </thead>
        <tbody>
            {
                props.rows.map(item => {
                    return (
                        <TableRow variable={item.variable} size={item.size} line={item.lineHeight}/>
                    )
                })
            }
        </tbody>
    </Table>
;

export const TableRow = props =>
    <Row>
        <td>{props.variable}</td>
        <td>{props.size}</td>
        <td>{props.line}</td>
    </Row>
;

export default { VariableTable, TableRow };
