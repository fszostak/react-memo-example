import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyNormalComponent from './components/MyNormalComponent'
import MyMemoComponent from './components/MyMemoComponent'

class App extends Component {
  state = { count: 0, value: "my message goes here" };

  handleClick = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    const { count, value } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Memo Example</p>
          <p>See console and click in "Increase" button</p>
        </header>
        <section>
        <p>
          Counter={count}
          <button
              type="button"
              onClick={this.handleClick}
            >
              Increase
            </button>
          </p>
        </section>
        <section>
          <h1>MyMemoComponent</h1>
          <MyMemoComponent message={value}/>
        </section>
        <section>
          <h1>MyNormalComponent</h1>
          <MyNormalComponent message={value}/>
        </section>
      </div>
    );
  }
}

export default App;
