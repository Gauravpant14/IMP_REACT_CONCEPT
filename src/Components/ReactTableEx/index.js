import React, { useMemo } from "react";
import { useTable } from "react-table";
import {userData} from '../../data/users.json'
const ReactTableEx = () => {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  console.log(userData)
  const tableInstance = useTable({ columns, data });
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance
  return (
    <div>
      <table {...getTableProps()}>
        <thead>
           {// Loop over the header rows
       headerGroups.map(headerGroup => (
        // Apply the header row props
        <tr {...headerGroup.getHeaderGroupProps()}>
          {// Loop over the headers in each row
          headerGroup.headers.map(column => (
            // Apply the header cell props
            <th {...column.getHeaderProps()}>
              {// Render the header
              column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
        </thead>
        <tbody {...getTableBodyProps()}>
       {// Loop over the table rows
       rows.map(row => {
         // Prepare the row for display
         prepareRow(row)
         return (
           // Apply the row props
           <tr {...row.getRowProps()}>
             {// Loop over the rows cells
             row.cells.map(cell => {
               // Apply the cell props
               return (
                 <td {...cell.getCellProps()}>
                   {// Render the cell contents
                   cell.render('Cell')}vehicle_details
                 </td>
               )
             })}
           </tr>
         )
       })}
     </tbody>
      </table>
  
    </div>
  );
};

export default ReactTableEx;
