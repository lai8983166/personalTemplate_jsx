import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//import FilterComponent from "./views/Filter_ant";
//import FilterComponentRaw from "./views/Filter_raw";
import AppRouter from "./router/router";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
