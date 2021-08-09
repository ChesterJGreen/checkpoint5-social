<template>
  <div id="post" class="post-card row card shadow my-2">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-2 m-3 d-sm-2">
          <router-link router-link :to="{ name: 'Profile', params: {id: post.creatorId } }" class="creator p-3 align-self-end">
            <img class="w-75 rounded-pill" :src="post.creator.picture" alt="" srcset="">
            <small>{{ post.creator.name }}</small>
          </router-link>
        </div>
        <div class="col-md-8 text-left p-3 d-flex align-self-center">
          <span>{{ post.body }}</span>
        </div>
        <div v-if="account.id === post.creatorId" class="col-md-2 text-right">
          <i class="mdi mdi-24px mdi-trash-can-outline action" @click="destroy">
          </i>
        </div>
      </div>
      <div class="row">
        <div v-if="post.imgUrl" class="col-md-12 p-0">
          <img :src="post.imgUrl" class="w-100" :alt="post.creatorId">
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 p-2">
        </div>
        <div v-if="user.isAuthenticated" class="col-md-6 p-2 pr-5 d-flex justify-content-end">
          <span>{{ post.likes.length }}</span>
          <i type="checkbox" class="mdi mdi-24px mdi-heart action text-red" @click="like"></i>
        </div>
        <div v-else class="col-md-6 p-2 pr-5 d-flex justify-content-end">
          <span>{{ post.likes.length }}</span>
          <i class="mdi mdi-24px mdi-heart text-red"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'

export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      user: computed(() => AppState.user),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await postsService.destroy(props.post.creatorId)
            Pop.toast('Deleted', 'success')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async like() {
        try {
          await postsService.like(props.post.like)
          Pop.toast('You like a post', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
