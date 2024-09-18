import "./App.css";
import Navbar from "./components/navbar";
import Demo from "./components/demo";
import Product from "./components/product";
import Donate from "./components/DonationBanner.js";
import Contact from "./components/Contact.js";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <Demo />
      <div className="line-break d-flex justify-content-center">
        <hr />
      </div>
      <Product />
      <Donate />
      <Contact />
    </div>
  );
}

export default App;
