import * as React from "react";

/**
 * Checkout team. **Internal context**. Should not be provided by API.
 */
const CheckoutContext = React.createContext({
  isFormValid: false,
  startPayment() {
    console.log("start payment");
  },
  merchantId: ""
});

export { CheckoutContext };

interface CheckoutProviderProps {
  merchantId: string;
  children: React.ReactNode;
}

/**
 * Checkout team. Should be used on top of all module.
 */
export function CheckoutProvider(props: CheckoutProviderProps) {
  const [merchantId, setMerchantId] = React.useState(props.merchantId);
  const [isFormValid, setIsFormValid] = React.useState(false);
  return (
    <CheckoutContext.Provider
      value={{
        isFormValid: isFormValid,
        merchantId: props.merchantId,
        startPayment() {
          console.log("start payment");
        }
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}
