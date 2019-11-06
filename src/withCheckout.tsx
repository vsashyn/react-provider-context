import * as React from "react";
import { CheckoutContext } from "./CCCheckoutWidgetProvider";
/**
 * Checkout team. Component to provide needed props
 */

export function withCheckout(WrappedComponent) {
  return function(props) {
    return (
      <CheckoutContext.Consumer>
        {checkoutProps => <WrappedComponent {...checkoutProps} {...props} />}
      </CheckoutContext.Consumer>
    );
  };
}
