import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ChildCare from './pages/ChildCare';
import PetCare from './pages/PetCare';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Fundraiser from './pages/Support/Fundraiser';
import Hospital from './pages/Support/Hospital';
import Bloodbanks from './pages/Support/Bloodbanks';
import DiagnosticCenters from './pages/Support/DiagnosticCenters';
import Pharmacies from './pages/Support/Pharmacies';
import { Navbar } from './components';
import AuthContext from './context/AuthContext';

const Router = () => {
	const { loggedIn } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/child-care" element={<ChildCare />} />
				<Route path="/pet-care" element={<PetCare />} />
				<Route path="/fundraiser" element={<Fundraiser />} />
				<Route path="/hospital" element={<Hospital />} />
				<Route path="/bloodbanks" element={<Bloodbanks />} />
				<Route
					path="/diagnostic-centers"
					element={<DiagnosticCenters />}
				/>
				<Route path="/pharmacies" element={<Pharmacies />} />
				{!loggedIn && <Route path="/login" element={<Login />} />}
				{loggedIn && <Route path="/" element={<Home />} />}
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
