import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './pages/home';
import Apropos from './pages/apropos';
import suivrePlainte from './pages/suivrePlainte';
import DeposerPlainte from './pages/deposerPlainte';
import Faq from './pages/faq';
import Contacts from './pages/contacts';
import Footer from './components/footer';
import DeposerPlainteStep2 from './pages/deposerPlainteStep2';
import ResumeFormulaire from './pages/resumeFormulaire';
import SuivrePlainte from './pages/suivrePlainte';

function App() {
  return (
  //   <Router>
  //   <Navbar/>
  //   <Switch>
  //     <Route path='/' exact component={Home} />
  //     <Route path='/apropos' component={Apropos} />
  //     <Route path='/depotplainte' component={DeposerPlainte} />
  //     <Route path='/depotplainteStep2' component={DeposerPlainteStep2} />
  //     <Route path='/suivreplainte' component={suivrePlainte} />
  //     <Route path='/resumeform' component={ResumeFormulaire} />
  //     <Route path='/faq' component={Faq} />
  //     <Route path='/contacts' component={Contacts} />

  //   </Switch>
   

  
  // </Router>

        <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="suivreplainte" element={<SuivrePlainte />} />
          <Route path="depotplainte" element={<DeposerPlainte />} />

          <Route path="depotplainteStep2" element={<DeposerPlainteStep2 />} />
          <Route path="apropos" element={<Apropos />}>
            
            
           
            </Route>
        </Routes>
        </div>
  );
}

export default App;
