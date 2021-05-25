import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/Single_Review";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/reviews/categories/:category">
          <Reviews />
        </Route>
        <Route exact path="/review/:review_id">
          <SingleReview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
