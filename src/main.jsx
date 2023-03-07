import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider";
registerLicense(
  "Mgo+DSMBaFt/QHRqVVhkVFpAaVldX2NLfUNwT2JedVpwZCQ7a15RRnVfQV1kSXhScUFjUH1Ycw=="
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
