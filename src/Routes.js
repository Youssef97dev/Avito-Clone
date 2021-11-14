// Libs
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import { Home, Products, SignUp, SignIn } from "./pages";

// Paths
import { paths } from "./constans";

// Components
import { Header } from "./components";

const Routes = () => {
    return(
        <Router>
            <Header />
            <Switch>
            <Route exact path={paths.HOME_ROUTE}>
                <Home />
            </Route>
            <Route path={paths.PRODUCTS_ROUTE}>
                <Products />
            </Route>
            <Route path={paths.SignIn}>
                <SignIn />
            </Route>
            <Route path={paths.SignUp}>
                <SignUp />
            </Route>
            </Switch>
        </Router>
    );
}

export default Routes;