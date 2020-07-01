import React from 'react';
import './app.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: 0,
        headers: [],
        results: []
    };
}

handleForm = (count, headers, results) => {
  this.setState({count, headers, results});
}

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form handler={this.handleForm} />
        <Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
