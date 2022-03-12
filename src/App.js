import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import TopNavBar from "./components/TopNavBar";

function App() {
    return (
        <BrowserRouter>
            <TopNavBar/>
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/shop">
                    <Shop />
                </Route>
                <Route exact path="/shop/:item/:price">
                    <Shop />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
