<template>
  <div class="col-12" v-for="p in posts.posts" :key="p.id" :post="p">
    <PostCard :post="p" />
  </div>
  <div class="col-12">
    <div class="row">
      <div class="col-2">
        <a class="action" @click="" ><small>
          newer
        </small></a>
      </div>
      <div class="col-8"></div>
      <div class="col-2">
        <a class="action" @click="" ><small>
          older
        </small></a>
      </div>
    </div>
  </div>
</template>

<script>

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
