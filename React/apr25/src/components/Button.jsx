import React, { useState } from 'react';

function Button(props) {
  const [type, setType] = useState(null);

  function handleClick() {
    setType(typeof props.input);
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {type && <p>The type of input is: <span className="type">{type}</span></p>}
    </div>
  );
}

export default Button;
