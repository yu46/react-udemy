import React, { Component } from 'react';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input id="bar" type="text" onChange={() => { console.log("hi") }} />
      </React.Fragment>
    );
  }
}

export default App;
