import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* ctrl+space to define */}
    {/* Pay attantion object inside object*/}
    <App
      user={{
        firstName: "John",
        lastName: "Doe",
        contactDetails: { address: "Frankfurt" }
      }}
    />
  </StrictMode>,
  rootElement
);
