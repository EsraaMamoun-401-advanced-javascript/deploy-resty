import React from 'react';

import './form.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      history: [],
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.props.toggleLoading();
    if (this.state.url && this.state.method) {

      // let request = {
      //   url: this.state.url,
      //   method: this.state.method,
      // };

      // let url = '';
      // let method = '';

      let raw = await fetch(this.state.url)

      let resBody = await raw.json();
      let count = resBody.count;
      let results = resBody.results;

      // let headers = {};
      // raw.headers.forEach((val, key) => {
      //   headers[key] = val;
      // })

      // let headers = { 'content-type': raw.headers.get('Content-Type') };

      let headers = {};
      for (let entry of raw.headers.entries()) {
        headers[entry[0]] = entry[1];
      }


      this.props.handler(count, headers, results);
      this.props.toggleLoading();


      let localStorageObj = {};
      if (!this.state.url.includes(localStorageObj)) {
        localStorageObj[this.state.method] = this.state.url;

        let stringMethod_Url = JSON.stringify(localStorageObj);
        localStorage.setItem('Method_Url', stringMethod_Url);

        let retrievedObject = localStorage.getItem('Method_Url');

        JSON.parse(retrievedObject);

        //   let result = [];
        //   for (const method in this.localStorageObj) {
        //     console.log(`${method}: ${this.localStorageObj[method]}`);
        //     // obj[method] = this.localStorageObj[method];
        //     result.push(`${method}: ${this.localStorageObj[method]}`);
        //   }
        //   this.setState({result});

        
        // let listHistory = this.state.history;
        // listHistory = localStorageObj;
        // let resultsH = listHistory;
        // // this.props.historyF(resultsH);
        // console.log(resultsH);
        // this.setState({ resultsH });
      }
    }

    else {
      alert('missing information');
    }
  }

  handleChangeURL = event => {
    const url = event.target.value;
    this.setState({ url });
  };

  handleChangeMethod = event => {
    const method = event.target.id;
    this.setState({ method });
  };
  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} >
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={this.handleChangeURL} />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span className={this.state.method === 'get' ? 'active' : ''} id="get" onClick={this.handleChangeMethod}>GET</span>
            <span className={this.state.method === 'post' ? 'active' : ''} id="post" onClick={this.handleChangeMethod}>POST</span>
            <span className={this.state.method === 'put' ? 'active' : ''} id="put" onClick={this.handleChangeMethod}>PUT</span>
            <span className={this.state.method === 'delete' ? 'active' : ''} id="delete" onClick={this.handleChangeMethod}>DELETE</span>
          </label>
        </form>
        {/* <section className="results">
          <span className="method">{this.state.request.method}</span>
          <span className="url">{this.state.request.url}</span>
        </section> */}
      </>
    );
  }
}

export default Form;
