import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { TableGrid } from './table/table'


export class App extends Component {

  public palash: string | undefined;
  public render() {
    this.palash = 'Palash Toshniwal'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with {this.palash}
          </a>
        </header>
        <TableGrid />
      </div>
    );
  }
}

