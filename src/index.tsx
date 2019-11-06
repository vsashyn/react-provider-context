import * as React from "react";
import { render } from "react-dom";

import { CheckoutProvider } from "./CheckoutWidgetProvider";
import { Modal } from "./Modal";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Payments</h1>
      <CheckoutProvider merchantId={"asdf_fdas_asdf_fdas"}>
        <Modal />
      </CheckoutProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
