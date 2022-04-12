/* eslint-disable no-unused-vars */
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from "./redux/store/store"
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIcecreamContainer from './components/HooksIcecreamContainer'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <HooksIcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;