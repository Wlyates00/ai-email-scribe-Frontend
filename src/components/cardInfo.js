import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import "./cardInfo.css";

const CreditCard = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  // Using thise state to stop the spam of donations
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Create a payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      setIsProcessing(false);
    } else {
      // Make a request to backend to create a payment intent and confirm the payment
      const response = await fetch(process.env.REACT_APP_DONATION_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          payment_method_id: paymentMethod.id,
          amount,
        }),
      });

      // If call was successful
      if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData.error);
        setIsProcessing(false);
        return;
      }

      // Recieve back the client secret to confim
      const { clientSecret } = await response.json();

      // Confirming secret
      const { error: confirmError } = await stripe.confirmCardPayment(
        clientSecret
      );
      if (confirmError) {
        console.error(confirmError);
        setIsProcessing(false);
      }
      // Success Popup
      else {
        Swal.fire({
          title: "Success!",
          text: "Thank You! Your donation has been received.",
          icon: "success",
          confirmButtonColor: "#479191",
        });
        setIsProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          border: "3px solid white",
          padding: "3px 3px 3px 3px",
          borderRadius: "5px",
          background: "white",
        }}
      >
        <CardElement />
      </div>
      <button
        className="donate-submit"
        type="submit"
        disabled={!stripe || isProcessing}
      >
        Pay ${amount}
      </button>
    </form>
  );
};

export default CreditCard;
