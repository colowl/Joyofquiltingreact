import React from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Joy of Quilting Art!</h1>
          </header>
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
