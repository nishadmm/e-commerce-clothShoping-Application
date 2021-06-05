import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const token = (token) => {
    alert("Payment Successfull");
    console.log(token);
  };

  const priceForStripe = price * 100;

  const stripeKey =
    "pk_test_51IyeQfSDP8IvgETXJNTBPxdSGyN9hc4LClMNOGEb6oDp9yUBJc3jKMRmyj44JMrV6mViE24aKsMRUNBkLTwCu14N00zcTZoTb9";

  return (
    <StripeCheckout
      token={token}
      stripeKey={stripeKey}
      label="Pay Now"
      name="CROWN CLOTHING .LTD"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your Total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
    />
  );
};

export default StripeButton;
