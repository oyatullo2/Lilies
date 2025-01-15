import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalState } from "./Context/GlobaState.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
  </BrowserRouter>
);
