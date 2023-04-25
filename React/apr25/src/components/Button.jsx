function Button(props) {
  let type = typeof props.input;
  return <p> The type of input is: <span className="type">{type}</span></p>;
}

export default Button;
