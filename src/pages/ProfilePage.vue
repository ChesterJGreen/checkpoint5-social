<template>
  <div class="profile-page container-fluid">
    <div class="row">
      <ProfileCard :post="post" />
    </div>
    <div class="row">
      <PostsThread :posts="posts" />
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
    const router = useRoute()
    onMounted(async() => {
      try {
        await postsService.getByProfileId({ creatorId: router.params.id })
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      user: computed(() => AppState.user)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
