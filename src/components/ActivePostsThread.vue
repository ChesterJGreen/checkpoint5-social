<template>
  <div class="col-12" v-for="p in posts" :key="p.id" :post="p">
    <PostCard :post="p" />
  </div>
  <div class="col-12">
    <div class="row">
      <div class="col-2">
        <a class="action" @click="newerPost"><small>
          newer
        </small></a>
      </div>
      <div class="col-8"></div>
      <div class="col-2">
        <a class="action" @click="olderPost"><small>
          older
        </small></a>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import Pop from '../utils/Notifier'

export default {
  name: 'ActivePostsThread',
  props: {
    posts: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async newerPost() {
        try {
          await postsService.newerPost()
        } catch (e) {
          Pop.toast(e, 'error')
        }
      },
      async olderPost() {
        try {
          await postsService.olderPost()
        } catch (e) {
          Pop.toast(e, 'error')
        }
      }
    }
  }
}
</script>
