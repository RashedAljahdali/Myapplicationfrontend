import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import App from "./App.js";
const container = document.getElementById("root");
if (!container)
    throw new Error("Root container not found");
const root = ReactDOM.createRoot(container);
root.render(_jsx(App, {}));
