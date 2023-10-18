import ReactDOM from "react-dom/client";
import "./index.css";
import AppStoreProvider from "./context/AppStoreProvider";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppStoreProvider>
    <App />
  </AppStoreProvider>
);