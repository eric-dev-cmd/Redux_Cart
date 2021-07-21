import { Component } from "react";
import CartItem from "./CartItem";
import CartResult from "./CartResult";
class Cart extends Component {
  onHandleClick() {
    console.log("clicked!");
  }
  render() {
    var { children } = this.props;
    return (
      <div>
        <section className="section">
          <div className="table-responsive">
            <table className="table product-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {children}

                <CartResult />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default Cart;
