import React, {Component} from 'react';
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>{'Test'}</React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);