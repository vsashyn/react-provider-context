import * as React from "react";
import { useCheckout } from './hooks/useCheckout'
import { CheckoutWidget } from "./CheckoutWidget";

/**
 * Consumer of the context. Should get all public available API
 */
function Modal(props) {
  const { startPayment, isFormValid } = useCheckout();
  return (
    <div>
      Is form valid: {isFormValid.toString()}.
      <br />
      <CheckoutWidget />
      <button
        onClick={() => {
          if (isFormValid) {
            startPayment();
          }
        }}
      >
        Start payment (button enabled: {isFormValid.toString()})
      </button>
    </div>
  );
}

export { Modal };
