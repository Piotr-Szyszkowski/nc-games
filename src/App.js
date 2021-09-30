import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Reviews from "./Components/Reviews";
import SingleReview from "./Components/Single_Review";
import Error404 from "./Components/Error404";
import { UserContext, defaultUserObject } from "./Contexts/UserContext";

function App() {
  const [user, setUser] = useState(defaultUserObject);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App ">
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
          <Route component={Error404} />
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
