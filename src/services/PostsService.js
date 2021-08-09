import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostsService {
  async getAll() {
    const res = await api.get('api/posts')
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getAllPage(nextPage) {
    const res = await api.get('api/posts?page=' + nextPage)
    logger.log(res.data)
    AppState.posts = res.data
  }

  async getByProfileId(id) {
    const res = await api.get(`/api/posts/${id}/posts`)
    logger.log(res.data)
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    logger.log(res.data)
    AppState.posts = AppState.posts.unshift(res.data)
  }

  async destroy(id) {
    await api.delete('api/posts' + id)
    AppState.posts = AppState.posts.filter(p => p.id !== id)
    await this.getAll()
  }

  async like(id, like) {
    const res = await api.put('api/posts' + id, like)
    AppState.posts = res.data
  }

  async olderPost() {
    let older = 2
    const res = await api.get('api/posts?page=' + older)
    AppState.posts = res.data
    if (res.data.next != null) {
      older = res.data.older
    }
  }

  async newerPost() {
    let newer
    const res = await api.get('api/posts?page=' + newer)
    AppState.posts = res.data
    if (res.data.next != null) {
      newer = res.data.newer
    }
  }
}
export const postsService = new PostsService()
