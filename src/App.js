import React from "react";
import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
import Footer from "./Components/Footer";
import ShowCompleted from "./Components/ShowCompleted";

const App = () => {
  return (
    <>
      <div className="header">
        <Header />
        <List />
        {/* <Footer />  */}
        {/* <ShowCompleted /> */}
      </div>
    </>
  );
};

export default App;
