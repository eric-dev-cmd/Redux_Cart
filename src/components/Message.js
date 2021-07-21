import { Component } from "react";
class Header extends Component {
  onHandleClick() {
    console.log("clicked!");
  }
  render() {
    var { message } = this.props;
    return (
      <div>
        <h3>
          <span
            className="badge amber darken-2"
            style={{ padding: "10px 40px" }}
          >
            {message}
          </span>
        </h3>
      </div>
    );
  }
}

export default Header;
