import React from 'react';
import '../../app.scss';
import Form from '../form/form';
import Results from '../results/results';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      headers: [],
      results: []
    };
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading })
  }
  handleForm = (count, headers, results) => {
    this.setState({ count, headers, results });
  }
  render() {
    return (
      <React.Fragment>
        <Form handler={this.handleForm} toggleLoading={this.toggleLoading} />
        <Results loading={this.state.loading} count={this.state.count} headers={this.state.headers} results={this.state.results} />
      </React.Fragment>
    );
  }
}

export default Home;
