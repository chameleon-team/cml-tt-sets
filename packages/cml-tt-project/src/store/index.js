import createStore from 'cml-tt-store';
import testStore from './testStore';
const store = createStore({
  modules: {
    testStore
  }
});

export default store;
