<template>
  <div id="post-form" class="row card shadow">
    <div class="col-md-12 p-4">
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
          <button type="submit" @submit="img-modal" class="btn btn-success action">
            Add Photo/Video
          </button>
        </div>
        <div class="col-md-6 p-2">
          <button type="submit" @submit="createPost" class="btn btn-success action">
            Post
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'PostForm',
  setup() {
    return {
      profile: computed(() => AppState.account)
    }
  }
}
</script>
