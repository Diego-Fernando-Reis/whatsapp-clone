import React from 'react';

function Icone(props) {
  return (
    <>
      <div className='icone' id={props.id}>{props.children}</div>
    </>
  );
}

export default Icone;