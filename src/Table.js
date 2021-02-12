import React, { Component } from 'react';

// HEADER
const TableHeader = (props) => {
  console.log('-------------');

  console.log(props);

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Operacija</th>
      </tr>
    </thead>
  );
};

// TABLE BODY
const TableBody = (props) => {
  console.log(props);

  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;

  // return (
  //   <tbody>
  //     <tr>
  //       <td>Charlie</td>
  //       <td>Janitor</td>
  //     </tr>
  //     <tr>
  //       <td>Mac</td>
  //       <td>Bouncer</td>
  //     </tr>
  //     <tr>
  //       <td>Dee</td>
  //       <td>Aspiring actress</td>
  //     </tr>
  //     <tr>
  //       <td>Dennis</td>
  //       <td>Bartender</td>
  //     </tr>
  //   </tbody>
  // );
};

const Pokus = (data) => {
  console.log(data);
  return (<p>Idemo</p>);
};

class Table extends Component {
  render() {
    const { characterData, removeCharacter } = this.props;
    console.log(this.props);
    console.log(this.props.characterData);

    return (
      <table>
        {/* <Pokus pokuspodatak="konj" /> */}
        <TableHeader podatak='pokus' />
        <TableBody
          characterData={characterData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}

export default Table;
