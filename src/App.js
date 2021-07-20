import { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
import Cart from "./components/Cart";
import Message from "./components/Message";

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
            <Message />
            {/* Message */}

            {/* Cart */}
            <Cart />
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
