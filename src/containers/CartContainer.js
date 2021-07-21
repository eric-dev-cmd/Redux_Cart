import { Component } from "react";
import { connect } from "react-redux";
import * as Message from "./../constants/Message";
import Cart from "./../components/Cart";
import PropTypes from "prop-types";
import CartItem from "../components/CartItem";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    console.log(cart);
    return <Cart>{this.showCart(cart)}</Cart>;
  }
  showCart = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem index={index} key={index} item={item}></CartItem>;
      });
    }
    return result;
  };
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(CartContainer);
