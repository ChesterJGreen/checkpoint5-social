<template>
  <div id="profile" class="col-md-12 profile-card card shadow my-5">
    <div v-if="profile" class="about text-center">
      <h3>Welcome</h3>
      <p class="text-wrap">
        {{ profile.name }}
      </p>
      <img class="rounded-pill" :src="profile.picture" alt="" />
      <p v-if="profile.class">
        {{ profile.class }} : <span v-if="profile.graduated"><i class="mdi mdi-24px mdi-school-outline"></i></span>
      </p>
      <p v-else>
        No picture for Profile
      </p>
      <p v-if="profile.name">
        {{ profile.name }}
      </p>
      <p v-else>
        No Name for Profile
      </p>
      <p v-if="profile.github">
        {{ profile.github }}
      </p>
      <p v-else>
        No Github for Profile
      </p>
      <p v-if="profile.linkedin">
        {{ profile.linkedin }}
      </p>
      <p v-else>
        No LinkedIn for Profile
      </p>
      <p v-if="profile.resume">
        {{ profile.resume }}
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
  setup() {
    return {
      profile: computed(() => AppState.profile)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
