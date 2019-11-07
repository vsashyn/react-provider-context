import * as React from 'react';
import { CheckoutContext } from '../CheckoutWidgetProvider';

export function useCheckout() {
  const checkout = React.useContext(CheckoutContext);

  return {
    startPayment: checkout.startPayment,
    isFormValid: checkout.isFormValid,
  }
}
