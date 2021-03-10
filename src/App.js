import './App.css';
import { Redirect, Route, Switch,BrowserRouter  } from 'react-router-dom';
import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
  <>
  <BrowserRouter>
  <ScrollToTop/>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Services}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/" />
  </Switch>
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
