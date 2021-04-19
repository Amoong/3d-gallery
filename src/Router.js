import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from "routes/About";
import Home from "routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
