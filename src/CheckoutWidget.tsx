import * as React from "react";

interface CheckoutWidget {
  onPaymentSuccess();
  onPaymentFailure();
  onFormValidationChange();
}

export function CheckoutWidget(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        border: "3px solid yellow"
      }}
    >
      <label>Card number</label>
      <input aria-label="Card number" type="text" />
      <label>Expiration date</label>
      <input type="text" />
      <label>CVV</label>
      <input type="text" />
    </div>
  );
}
