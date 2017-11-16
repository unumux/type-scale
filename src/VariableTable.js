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
                {
                    props.columns.map(item => <th key={item.property}>{item.name}</th>)
                }
            </tr>
        </thead>
        <tbody>
            {
                props.rows.map(item => {
                    return (
                        <TableRow key={item.id} columns={props.columns} rowData={item}/>
                    )
                })
            }
        </tbody>
    </Table>


export const TableRow = props =>
    <Row>
        {
            props.columns.map(column => {
                return <td key={column.property}>{props.rowData[column.property]}</td>
            })
        }
    </Row>


export default { VariableTable, TableRow };
