import PropTypes from 'prop-types';

// PRODUCT ELEMENT
function Product (props){
    return(
        <div className="product">
            <p>{props.category}</p>
            <h1>{props.title}</h1>
            <p>{props.stars}</p>
            <p><strong>{props.price}$</strong></p>
        </div>
    )
}

Product.propTypes = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };

export default Product;