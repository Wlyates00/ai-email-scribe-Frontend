import React, { useState } from "react"; // Import React and useState hook from the 'react' library
import { loadStripe } from "@stripe/stripe-js"; // Import the loadStripe function to initialize Stripe
import { Elements } from "@stripe/react-stripe-js";
import "./donateBanner.css";
import CreditCard from "./cardInfo";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const DonationBanner = () => {
  // Keep track if of an amount
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleAmountClick = async (event) => {
    setSelectedAmount(parseInt(event.currentTarget.value));

    // Configuring the class naming for styling
    if (event.currentTarget.classList.contains("selected")) {
      event.currentTarget.classList.remove("selected");
      document.getElementById("hidden").style.display = "none";
    } else {
      document.querySelectorAll(".donate-button").forEach((button) => {
        button.classList.remove("selected");
      });

      // Add 'selected' class to the clicked button
      event.currentTarget.classList.add("selected");

      document.getElementById("hidden").style.display = "block";
    }
  };

  return (
    <div className="banner text-center" id="donate">
      <h1 className="donate-header">Donate</h1>
      <p className="donate-desc">
        <em>Donations allow us to keep generating AI emails!</em>
      </p>
      <div className="donate-buttons d-flex justify-content-center">
        <button
          className="donate-button"
          key={1}
          onClick={handleAmountClick}
          value={1}
          id="donate-1"
        >
          $1
        </button>
        <button
          className="donate-button"
          key={5}
          onClick={handleAmountClick}
          value={5}
          id="donate-5"
        >
          $5
        </button>
        <button
          className="donate-button"
          key={10}
          onClick={handleAmountClick}
          value={10}
          id="donate-10"
        >
          $10
        </button>
        <button
          className="donate-button"
          key={20}
          onClick={handleAmountClick}
          value={20}
          id="donate-20"
        >
          $20
        </button>
        <button
          className="donate-button"
          key={50}
          onClick={handleAmountClick}
          value={50}
          id="donate-50"
        >
          $50
        </button>
        <button
          className="donate-button"
          key={100}
          onClick={handleAmountClick}
          value={100}
          id="donate-100"
        >
          $100
        </button>
      </div>
      <Container className="card-form-container" id="hidden">
        {" "}
        {/* Container for the credit card form */}
        <Elements stripe={stripePromise} style="border: 3px solid white">
          {" "}
          {/* Stripe Elements provider to give access to Stripe context */}
          <CreditCard amount={selectedAmount} />{" "}
          {/* Render CreditCard component and pass the selected amount */}
        </Elements>
      </Container>
    </div>
  );
};

export default DonationBanner;
