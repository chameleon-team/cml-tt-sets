import * as types from './mutations-type'

export const doA = async function ({commit, state}) {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({a: state.a += 1, b: state.b})
    } catch (e) {
      console.log('doA Fail', e)
    }
  })
}

export const getTestStoreData = async function ({commit, dispatch, state}) {
  return dispatch('doA')
    .then(({a, b}) => {
      console.log('a', a)
      commit(types.SET_TEST_DATA, {a, b})
      return {a, b}
    })
    .catch((e) => {
      commit(types.SET_TEST_DATA, {a: 1, b: 2})
      return {a: 1, b: 2}
    })  
}
