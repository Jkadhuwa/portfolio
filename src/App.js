import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Resume from './pages/Resume';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
