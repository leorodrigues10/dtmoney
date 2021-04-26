import React from 'react';
import './table.css'

function Table(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>
            Titulo
          </th>
          <th>
            Valor
          </th>
          <th>
            Data
          </th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>

    </table>
  );
}

export default Table;