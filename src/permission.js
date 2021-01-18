import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    const realname = store.getters.realname
    if (!realname) {
      store.dispatch('user/getInfo')
    }
  }
  next()
})
