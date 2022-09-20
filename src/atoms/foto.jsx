import React from 'react';

function Foto(props) {
  return (
    <>
      <img id={props.id} src={props.src}></img>
    </>
  );
}

export default Foto;