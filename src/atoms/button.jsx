import React from 'react';

function Button(props) {
  return (
    <>
      <button id={props.id}>{props.valordobotao}</button>
    </>
  );
}

export default Button;