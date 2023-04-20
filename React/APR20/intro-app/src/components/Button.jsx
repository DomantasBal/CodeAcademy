import "../components/Button.scss"

function Button(props) {
    return (
      <>
        <button className="btn"  onClick={props.mathAction}>{props.symbol}</button>
      </>
    );
  }
  
  export default Button;
  