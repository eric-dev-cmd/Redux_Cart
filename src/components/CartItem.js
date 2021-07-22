import { Component } from "react";
import * as Message from "./../constants/Message";
class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  render() {
    var { item } = this.props;
    var { quantity } = this.state;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.image}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div
            className="btn-group radio-group"
            style={{ marginLeft: "12px" }}
            data-toggle="buttons"
          >
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
              className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
              className="btn btn-sm btn-primary aboutbtn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.subTotal(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteProduct(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  onUpdateQuantity = (product, quantity) => {
    var { onUpdateProductInCart } = this.props;
    if (quantity > 0) {
      this.setState({
        quantity: quantity,
      });
      console.log(quantity);
      onUpdateProductInCart(product, quantity);
    }
  };
  onDeleteProduct = (product) => {
    var { onDeleteProduct, onChangeMessage } = this.props;
    onDeleteProduct(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
  };
  subTotal = (price, quantity) => {
    return price * quantity;
  };
}

export default CartItem;
