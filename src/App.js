import React from 'react';

// class App extends Component {
//   render() {

//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input id="bar" type="text" onChange={() => { console.log("hi") }} />
//       </React.Fragment>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>)
}
const Cat = () => {
  return (
    <div>
      meow!
    </div>)
}

export default App;
