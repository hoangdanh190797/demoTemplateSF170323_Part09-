import { createStore, createLogger } from 'vuex'
import textUrl from './modules/textUrl'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    textUrl,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
