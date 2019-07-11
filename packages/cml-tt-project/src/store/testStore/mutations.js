import * as types from './mutations-type';

const mutations = {
  [types.SET_TEST_DATA] (state, payload) {
    Object.assign(state, payload);
  }
};
export default mutations;
