import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import InfoPage from "./pages/InfoPage";
import LoginRoute from "./components/LoginRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Redirect from="/hiro-app" to="/" />
        <LoginRoute exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={HomePage} />
        <PrivateRoute exact path="/search" component={SearchPage} />
        <PrivateRoute exact path="/:id" component={InfoPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
