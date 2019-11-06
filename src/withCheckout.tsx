import * as React from "react";
import { CheckoutContext } from "./CCCheckoutWidgetProvider";

/**
 * Checkout team. Component to provide needed props
 * This HOC should be used to pass .startPayment method to child component
 * Can be used multiple times. 
 * Provides method startPayment and isFormValid property
 */
export function withCheckout(WrappedComponent) {
  return function(props) {
    return (
      <CheckoutContext.Consumer>
        {checkoutProps => 
          <WrappedComponent 
            isFormValid={checkoutProps.isFormValid}
            startPayment={checkoutProps.startPayment}
            {...props} 
          />}
      </CheckoutContext.Consumer>
    );
  };
}
