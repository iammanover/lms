import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CourseProvider } from "./contexts/CourseContext";
import { ToastProvider } from "./contexts/ToastContext";
import "./styles/toast.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastProvider>
      <CourseProvider>
        <App />
      </CourseProvider>
    </ToastProvider>
  </BrowserRouter>
);
