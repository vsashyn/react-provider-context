import * as React from "react";
import { CheckoutContext } from './CCCheckoutWidgetProvider'
import { FlexDirectionProperty } from "csstype";

interface CheckoutWidget {
  onPaymentSuccess();
  onPaymentFailure();
  onFormValidationChange();
}

export function CheckoutWidget(props) {
  const [ number, setNumber ] = React.useState('');
  const [ expDate, setExpDate ] = React.useState('');
  const [ cvv, setCvv ] = React.useState('');
  const payment = React.useContext(CheckoutContext);
  
  React.useEffect(() => {
    // validate form and update validation form status
    if (number && expDate && cvv) {
      payment.setIsFormValid(true);
    }
  });

  return (
      <div style={styles}>
        <label>Card number</label>
        <input aria-label="Card number" type="text" value={number} onChange={e => setNumber(e.target.value)}/>
        <label>Expiration date</label>
        <input type="text"  value={expDate} onChange={e => setExpDate(e.target.value)}/>
        <label>CVV</label>
        <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} />
      </div>
  );
}

const styles = {
  display: "flex",
  flexDirection: "column" as FlexDirectionProperty,
  width: "200px",
  border: "3px solid",
  margin: "0 auto",
}
