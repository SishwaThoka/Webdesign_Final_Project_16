import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ShowImage from './ShowImage';
import moment from 'moment';
import { addItem, updateItem, removeItem } from './cartHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEye, faPlus, faTag } from '@fortawesome/free-solid-svg-icons'

const Card = ({
  product,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,
  setRun = f => f,
  run = undefined
  // changeCartSize
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">
            <FontAwesomeIcon icon={faEye} /> &nbsp;

            View Product</button>
        </Link>
      )
    );
  };
  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };

  const shouldRedirect = redirect => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCartBtn = showAddToCartButton => {

    if (product.quantity <= 0) {
        return (
          <button onClick={addToCart} className="btn btn-pink mt-2 mb-2 card-btn-1 disabled">
              <FontAwesomeIcon icon={faPlus} /> &nbsp;

              Add to cart
          </button>
        );
    }

    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-pink mt-2 mb-2 card-btn-1  ">
          <FontAwesomeIcon icon={faPlus} /> &nbsp;

          Add to cart
        </button>
      )
    );
  };

  const showStock = quantity => {
    return quantity > 0 ? (
      <span className="badge badge-primary badge-pill rounded">In Stock </span>
    ) : (
      <span className="badge badge-danger badge-pill rounded">Out of Stock </span>
    );
  };

  const handleChange = productId => event => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = cartUpdate => {
    return (
      cartUpdate && (
        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Adjust Quantity</span>
            </div>
            <input type="number" className="form-control" value={count} onChange={handleChange(product._id)} />
          </div>
        </div>
      )
    );
  };
  const showRemoveButton = showRemoveProductButton => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect in parent Cart
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };
  return (
    <div className="card transitionCard mt-2" style={ { minWidth: "18rem"}}>
      <div className="card-body">
        {shouldRedirect(redirect)}
        <ShowImage item={product} url="product" />
        <span className="display-6"><b>{product.name}</b> </span><br/>
        <span className="">{product.description.substring(0, 100)} </span><br/>
        <span className="display-6"><b>$ {product.price}</b></span><br/>
        <span className=""><FontAwesomeIcon icon={faTag} /> {product.category && product.category.name}</span><br/>


        {showStock(product.quantity)}
        <br />

        {showViewButton(showViewProductButton)}

        {showAddToCartBtn(showAddToCartButton)}

        {showRemoveButton(showRemoveProductButton)}


      </div>
      <div className="card-footer bg-none">
          {showCartUpdateOptions(cartUpdate)}

         
         <small className="text-muted">                            
         <FontAwesomeIcon icon={faClock} /> &nbsp;
            Added on {moment(product.createdAt).fromNow()}</small>
      </div>
    </div>
  );
};

export default Card;
