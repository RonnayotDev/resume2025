import React from "react";
import "./App.css";
import MainLeft from "./components/MainLeft.jsx";
import MainRight from "./components/MainRight.jsx";

const App = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center p-8 gap-6">
        <MainLeft />
        <MainRight />
      </div>
    </>
  );
};

export default App;
