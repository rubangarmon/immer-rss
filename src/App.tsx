import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
  // value of the store on initialisation
  initialState: {
    count: 2,
    person: {
      name: "john",
      lastName: "doe",
      age: 66,
      address: {
        country: "costa rica",
        state: "san jose",
        canton: "escazu"
      }
    }
  },
  // actions that trigger store mutation
  actions: {
    increment:
      () =>
        ({ setState }) => {
          // mutate state synchronously
          setState(draf => {
            draf.person.address = {
              ...draf.person.address,
              canton : " lalala"
            }
          });
        },
  },
  // optional, mostly used for easy debugging
  name: 'counter',
});

const useCounter = createHook(Store);

function App() {
  const [state, actions] = useCounter();
  console.dir(state)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {state.count}
        <button onClick={actions.increment}>+</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
