import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { CreateQR } from "./CreateQR";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CreateQR />
    <Toaster position="bottom-right" richColors />
  </React.StrictMode>
);
