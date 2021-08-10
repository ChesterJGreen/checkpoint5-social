<template>
  <div class="profile-page container-fluid">
    <div class="row">
      <ProfileCard />
    </div>
    <div class="row">
      <ActivePostsThread :posts="activePosts" />
    </div>
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
    const route = useRoute()
    onMounted(async() => {
      try {
        await postsService.getByProfileId(route.params.id)
        await postsService.getProfile(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      activePosts: computed(() => AppState.activePosts),
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
