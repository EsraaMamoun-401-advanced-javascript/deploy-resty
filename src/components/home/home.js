import React from 'react';
import '../../app.scss';
import Form from '../form/form';
import Results from '../results/results';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: [],
      results: []
    };
  }
  handleForm = (count, headers, results) => {
    this.setState({ count, headers, results });
  }
  render() {
    return (
      <React.Fragment>
        <Form handler={this.handleForm} />
        <Results count={this.state.count} headers={this.state.headers} results={this.state.results} />
      </React.Fragment>
    );
  }
}

export default Home;
