<template>
  <div id="post-form" class="card shadow col-md-12 p-4 mb-2">
    <div class="row">
      <div class="col-md-2 m-auto">
        <img :src="account.picture" class="w-100" :alt="account.name">
      </div>
      <div class="col-md-8 m-auto p-2">
        <div class="form-group">
          <textarea class="form-control"
                    type="text"
                    id="body"
                    v-model="state.newPost.body"
                    required
                    placeholder="Tell us what's going on..."
                    rows="3"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 p-2">
        <button type="submit" @click="imgModal" class="btn btn-success action">
          Add Photo/Video
        </button>
      </div>
      <div class="col-md-6 p-2">
        <button type="submit" @click="createPost" class="btn btn-success action">
          Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
import Swal from 'sweetalert2'

export default {
  name: 'PostForm',

  setup() {
    const state = reactive({
      dropOpen: false,
      newPost: {
        imgUrl: '',
        body: ''
      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      async createPost() {
        try {
          logger.log('Creating post')
          await postsService.createPost(state.newPost)
          Pop.toast('Post Created', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async imgModal() {
        try {
          logger.log('capturing image')
          const { value: url } = await Swal.fire({
            input: 'url',
            inputLabel: 'URL address',
            inputPlaceholder: 'Enter the URL'
          })

          if (url) {
            Swal.fire(`Entered URL: ${url}`)
          }
          state.newPost.imgUrl = url
        } catch (e) {
          Pop.toast('could not get picture' + e, 'error')
        }
      }
    }
  },
  components: {}
}
</script>
