import React from "react";

export default function KeyDemo(props) {
  let keyItems = props.data.map(elem => {
    return (
      <tr key={elem.id}>
        <td>{elem.id}</td>
        <td>{elem.name} </td>
      </tr>
    );
  });

  return <table border="1">{keyItems}</table>;
}
