import React from 'react';
import './App.css';
import Start from './Start';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "ㅇㅇㅇ"
    };
  }

  render() {
    return (
      <div className="App">
        <Start name={this.state.name} />
      </div>
    );
  }
}

export default App;
