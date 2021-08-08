import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getByProfileId(id) {
    const res = await api.get()
    logger.log(res.data)
  }

  async createPost(post) {
    const res = await api.post('api/posts', post)
    logger.log(res)
    AppState.posts = res.data
  }

  async destroy(id) {
    await api.delete('api/posts' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
  }
}
export const postsService = new PostsService()
