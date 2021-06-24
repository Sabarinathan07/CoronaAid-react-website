import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, {useContext} from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ChildCare from "./pages/ChildCare";
import PetCare from "./pages/PetCare";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
import Fundraiser from "./pages/Support/Fundraiser";
import Hospital from "./pages/Support/Hospital";
import Bloodbanks from "./pages/Support/Bloodbanks";
import DiagnosticCenters from "./pages/Support/DiagnosticCenters";
import Pharmacies from "./pages/Support/Pharmacies";
import { Navbar } from "./components";
import AuthContext from "./context/AuthContext";

const Router = () => {

    const { loggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about-us" component={AboutUs} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/child-care" component={ChildCare} />
				<Route path="/pet-care" component={PetCare} />
				<Route path="/fundraiser" component={Fundraiser} />
				<Route path="/hospital" component={Hospital} />
				<Route path="/bloodbanks" component={Bloodbanks} />
				<Route path="/diagnostic-centers" component={DiagnosticCenters} />
				<Route path="/pharmacies" component={Pharmacies} />
                {loggedIn === false && (
                    <>
                        <Route path="/login" component={Login} />
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/" component={Home} />
                         {/* <Route path="/logut" component={Logut} /> */}
                    </>
                )}
				
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
