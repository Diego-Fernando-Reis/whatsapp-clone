import React from 'react';

function Subtitulo(props) {
  return (
    <>
      <p id={props.id}>{props.texto}</p>
    </>
  );
}

export default Subtitulo;