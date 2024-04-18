import React from "react"
import reactDom from "react-dom/client"
import App from "./App"

let el=document.getElementById("root");

let root=reactDom.createRoot(el);

root.render(<App/>)