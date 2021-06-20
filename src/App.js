// import Navbar from './components/Navbar/Navbar';
import { Navbar } from './components';
import './App.css';
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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/child-care' component={ChildCare} />
        <Route path='/pet-care' component={PetCare} />
        <Route path='/fundraiser' component={Fundraiser} />
        <Route path='/hospital' component={Hospital} />
        <Route path='/bloodbanks' component={Bloodbanks} />
        <Route path='/diagnostic-centers' component={DiagnosticCenters} />
        <Route path='/pharmacies' component={Pharmacies} />
      </Switch>
   </Router>
  );
}

export default App;
