import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import store from "./store/store.js";
import { router } from "./routes";
import { msalConfig } from "./config/msalConfig.js";
import "./index.css";

// Initialize MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

// Render the application
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  </Provider>,
);
