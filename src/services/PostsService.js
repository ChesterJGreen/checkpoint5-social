import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }
}
export const postsService = new PostsService()
