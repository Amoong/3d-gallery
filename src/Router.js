import { authService } from "fbase";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Admin from "routes/Admin";
import Signin from "routes/Auth";
import Home from "routes/Home";

const AppRouter = () => {
  const user = authService.currentUser;
  const isAdmin = user && process.env.REACT_APP_ADMIN_ID === user.uid;
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {user ? (
          isAdmin && (
            <Route exact path="/admin" user={user}>
              <Admin />
            </Route>
          )
        ) : (
          <Route exact path="/signin">
            <Signin />
          </Route>
        )}

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
