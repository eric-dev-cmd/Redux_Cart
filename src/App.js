import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

class App extends Component {
  onHandleClick() {
    console.log("clicked!");
  }
  render() {
    return (
      <div className="hidden-sn animated deep-purple-skin">
        {/* Header */}
        <Header />
        {/* Header */}

        <main id="mainContainer">
          <div className="container">
            <section className="section">
              <h1 className="section-heading">List Product</h1>

              {/* Products */}
              <ProductsContainer />
              {/* Products */}
            </section>
            {/* Message */}
            <MessageContainer />
            {/* Message */}

            {/* Cart */}
            <CartContainer />
            {/* Cart */}
          </div>
        </main>

        {/* Footer */}
        <Footer />
        {/* Footer */}
      </div>
    );
  }
}

export default App;
