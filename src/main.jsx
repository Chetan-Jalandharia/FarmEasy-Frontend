import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import UpdateProvider from "./Common/Context/RefreshData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UpdateProvider>
      <App />
    </UpdateProvider>
  </React.StrictMode>
);
