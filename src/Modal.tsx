import * as React from "react";
import { withCheckout } from "./withCheckout";
import { CheckoutWidget } from "./CheckoutWidget";

// TODO: provide one component - checkout, instead of multiple methods.
interface ModalProps {
  isFormValid: boolean;
  startPayment();
}
/**
 * Consumer of the context. Should get all public available API
 */
function Modal(props) {
  console.log(props);
  return (
    <div>
      Is form valid: {props.isFormValid.toString()}.
      <br />
      <CheckoutWidget />
      <button
        onClick={() => {
          if (props.isFormValid) {
            props.startPayment();
          }
        }}
      >
        Start payment (button enabled: {props.isFormValid.toString()})
      </button>
    </div>
  );
}

const ModalWithCheckout = withCheckout(Modal);
export { ModalWithCheckout as Modal };
