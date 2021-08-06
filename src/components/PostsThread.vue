<template>
  <div class="col-md-12" v-for="p in posts.posts" :key="p.id" :post="p">
    <PostCard :post="p" />
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {
  name: 'PostsThread',
  props: {
    posts: {
      type: Object,
      required: true
    }
  }
}
</script>
