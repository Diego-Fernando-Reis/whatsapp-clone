import React from 'react';

function Input(props) {
  return (
    <>
      <input type={props.tipo} placeholder={props.placeholder} id={props.id}/>
    </>
  );
}

export default Input;