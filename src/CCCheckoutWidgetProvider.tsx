import * as React from "react";

function noop(p) {}
/**
 * **Internal API**
 * hould not be provided by API.
 */
const CheckoutContext = React.createContext({
  merchantId: "",
  isFormValid: false,
  setIsFormValid: noop,
  startPayment: noop
});

export { CheckoutContext };

interface CheckoutProviderProps {
  merchantId: string;
  children: React.ReactNode;
}

/**
 * **External API**
 * Should be used on top of all module.
 */
export function CheckoutProvider(props: CheckoutProviderProps) {
  const [merchantId] = React.useState(props.merchantId);
  const [isFormValid, setIsFormValid] = React.useState(false);
  return (
    <CheckoutContext.Provider
      value={{
        isFormValid: isFormValid,
        merchantId: merchantId,
        setIsFormValid,
        startPayment() {
          console.log("start payment");
        }
      }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
}
