import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Signin from "routes/Auth";
import Home from "routes/Home";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
