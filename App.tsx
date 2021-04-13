import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import News from './pages/News';

const App: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>App</title>
      </Helmet>
      <Route path='/' render={() => <Header />}/>
      <Switch>
        <Route exact path='/' render={() => <Home />}/>
        <Route exact path='/news' render={() => <News />}/>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
