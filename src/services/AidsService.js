import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AidsService {
  async getAll() {
    const res = await api.get('api/ads')
    logger.log(res.data)
    AppState.aids = res.data
  }
}
export const aidsService = new AidsService()
