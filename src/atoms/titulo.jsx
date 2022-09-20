import React from 'react';

function Titulo(props) {
  return (
    <>
      <h1 id={props.id}>{props.texto}</h1>
    </>
  );
}

export default Titulo;