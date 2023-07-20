import React from "react";
import './styling.css'

const Table = ({ sat }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type of Satellite</th>
            <th>Launch Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => {
          return (
            <tr key={id}> 
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active" : "Inactive"}</td>
            </tr>
            )
          })}

        </tbody>
      </table>
    </>
  );
};

export default Table;

// - The body of the table will use the map function to render the data based on which button a user selects
// - Iterate through the sat prop using map; use the following callbacks: id and data
//  1. The map function will return data to each row in the table.
//  2. The <tr> tag in the table body needs a key. Set the key equal to the id
//  3. Create a total of four <td> tags
//    a. Use dot notation to assign the correct object key. The code below would render the name of a satellite.
//    b. <td>{data.name}</td>
//      The value for each <td> tag needs to correspond to the <th> tags. This means that we want names of 
//      satellites to be rendered in a column of names.
// - For the Status, create a conditional that will tell a user if a satellite is active or inactive based on its 
//    operational value.
