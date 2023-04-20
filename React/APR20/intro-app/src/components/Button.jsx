function Button(props) {
    return (
      <>
        <button onClick={props.mathAction}>{props.symbol}</button>
      </>
    );
  }
  
  export default Button;
  