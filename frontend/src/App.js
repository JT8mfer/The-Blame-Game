import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import "./App.css";
import SignUp from "./Components/Actions/SignUp";
import Home from "./Components/home";
import LogIn from "./Components/Actions/LogIn";

const App = () => {
  return (
    <div className="mainBody">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/overview" exact component={Overview} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
          <Route path="/team" exact component={Team} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LogIn} />
        </Routes>
      </Router>
      <Center/>
      {/* <LogIn /> */}

      {/* <SignUp /> */}
    </div>
    // </div>
  );
};
export default App;
