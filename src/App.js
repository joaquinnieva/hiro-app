import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import HeroesPage from "./pages/HeroesPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import HeroInfo from "./components/HeroInfo";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/heroes" component={HeroesPage} />
        <PrivateRoute exact path="/:id" component={HeroInfo} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
