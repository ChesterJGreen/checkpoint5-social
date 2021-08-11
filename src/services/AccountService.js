import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount(values) {
    try {
      const res = await api.put('account', values)
      AppState.account = res.data
    } catch (e) {
      Pop.toast('you must be logged in to do this ' + e, 'error')
    }
  }
}

export const accountService = new AccountService()
