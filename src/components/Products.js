import { Component } from "react";
class Products extends Component {
  render() {
    // console.log(this.props.children);
    return <div className="row">{this.props.children}</div>;
  }
}

export default Products;
