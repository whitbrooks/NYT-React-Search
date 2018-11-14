import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./pages/Main";

const App = () => (
  <Router>
    <div>
      <div>
        <Route path="/" component={Main} />
      </div>
    </div>
  </Router>

);

export default App;
