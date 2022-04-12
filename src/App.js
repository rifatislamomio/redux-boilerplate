/* eslint-disable no-unused-vars */
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from "./redux/store/store"
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
import UsersContainer from './components/UsersContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer />
        <HooksIcecreamContainer /> */}
        <UsersContainer />

      </div>
    </Provider>
  );
}

export default App;