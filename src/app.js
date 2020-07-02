import React from 'react';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Routes from './components/routes/routes';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Routes />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
