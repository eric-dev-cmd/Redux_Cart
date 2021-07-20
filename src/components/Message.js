import { Component } from "react";
class Header extends Component {
  onHandleClick() {
    console.log("clicked!");
  }
  render() {
    return (
      <div>
        <h3>
          <span className="badge amber darken-2">Order Success!</span>
        </h3>
      </div>
    );
  }
}

export default Header;
