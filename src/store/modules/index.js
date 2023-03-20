import { createStore, createLogger } from 'vuex'
import url from './modules/url'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    url,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
