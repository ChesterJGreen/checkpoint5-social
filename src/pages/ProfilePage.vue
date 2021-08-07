<template>
  <div class="profile-page container-fluid">
    <PostsThread :posts="posts" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
export default {
  setup() {
    const router = useRoute()
    onMounted(async() => {
      try {
        await postsService.getAll({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
