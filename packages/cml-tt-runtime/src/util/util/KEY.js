import Config from './config'
import apiInterface from './api.interface'

const instanceAPI = apiInterface.getInstance()

const KEY = {
  tt: {
    instance: instanceAPI,
    props: 'properties'
  }
}

export default new Config(KEY)