import mutations from './mutations';
import * as actions from './actions';

const testStore = {
  state: {
    a: 1,
    b: 2
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  getters: {
  }
};


export default testStore;

