import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'

class SearchsService {
  async search(query) {
    try {
      const res = await api.get(`api/posts?query=${query}`)
      logger.log(res.data)
      AppState.posts.posts = res.data.posts
    } catch (e) {
      Pop.toast(e, 'error')
    }
  }
}
export const searchsService = new SearchsService()
