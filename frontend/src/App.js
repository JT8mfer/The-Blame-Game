import React from "react";
import Center from "./Components/Center-reviews/Center";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";
import "./App.css";
import Logo from "./Components/blame-game-logo.jpg";
import SignUp from "./Components/Actions/SignUp";
// import LogIn from "./Components/Actions/LogIn";

const App = () => {
  return (
    <div className="mainBody">
      <Router>
        <Sidebar />

        <Switch>
          <Route path="/overview" exact component={Overview} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
          <Route path="/team" exact component={Team} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
      {/* <LogIn /> */}
      <img src={Logo} alt="logo"></img>

      <SignUp />
      <Center />
    </div>
  );
};
export default App;
