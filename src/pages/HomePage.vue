<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row my-4">
      <div class="col-md-12">
        <!-- <div class="row" v-if="user.isAuthenticated">
          <PostForm />
        </div> -->
        <div class="row">
          <PostsThread :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import PostsThread from '../components/PostsThread.vue'
import PostForm from '../components/PostForm.vue'

export default {
  name: 'Home',

  setup() {
    const state = reactive({
      dropOpen: false,
      newPost: {}
    })

    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      state,
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      async createPost() {
        try {
          await postsService.createPost(state.newPost)
        } catch (e) {
          Pop.toast(e, 'error')
        }
      }
    }
  },
  components: {
    PostsThread,
    PostForm

  }
}
</script>
<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
