<template>
  <div id="profile" class="col-md-12 profile-card card shadow my-5">
    <div v-if="post.creator" class="about text-center">
      <h3>Welcome</h3>
      <p class="text-wrap">
        {{ post.creator.name }}
      </p>
      <img class="rounded" :src="post.creator.picture" alt="" />
      <p v-if="post.creator.class">
        {{ post.creator.class }} : <span v-if="post.creator.graduated"><i class="mdi mdi-24px mdi-school-outline"></i></span>
      </p>
      <p v-else>
        No picture for Profile
      </p>
      <p v-if="post.creator.name">
        {{ post.creator.name }}
      </p>
      <p v-else>
        No Name for Profile
      </p>
      <p v-if="post.creator.github">
        {{ post.creator.github }}
      </p>
      <p v-else>
        No Github for Profile
      </p>
      <p v-if="post.creator.linkedin">
        {{ post.creator.linkedin }}
      </p>
      <p v-else>
        No LinkedIn for Profile
      </p>
      <p v-if="post.creator.resume">
        {{ post.creator.resume }}
      </p>
      <p v-else>
        No Resume for Profile
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'ProfileCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      profile: computed(() => AppState.account)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
