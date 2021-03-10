import React from "react";
// import Navbar from "../src/components/UI/Navbar/Navbar";
// import Center from "../src/components/UI/Center/Center";
import Sidebar from "../src/components/Sidebar";
// import Footer from "../src/components/UI/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from "./pages/Reports";
import Team from "./pages/Team";

const App = () => {
  return (
    <div>
      {/* Navbar */}
      {/* Center */}
      {/* sidebar */}
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/overview" exact component={Overview} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/reports1" exact component={ReportsOne} />
          <Route path="/reports/reports2" exact component={ReportsTwo} />
          <Route path="/reports/reports3" exact component={ReportsThree} />
          <Route path="/team" exact component={Team} />
        </Switch>
      </Router>
      {/* sidebar */}
      {/* Footer */}
    </div>
  );
};
export default App;
