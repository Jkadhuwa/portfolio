import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/404';
import Navbar from './components/Navbar';
const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
