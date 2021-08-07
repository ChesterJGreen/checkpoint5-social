<template>
  <div class="about text-center">
    <h3>Welcome</h3>
    <p class="text-wrap">
      {{ account.name }}
    </p>
    <img class="rounded" :src="account.picture" alt="" />
    <p v-if="account.class">
      {{ account.class }}
    </p>
    <p v-else>
      No picture for Account
    </p>
    <p v-if="account.name">
      {{ account.name }}
    </p>
    <p v-else>
      No Name for Account
    </p>
    <p v-if="account.github">
      {{ account.github }}
    </p>
    <p v-else>
      No Github for Account
    </p>
    <p v-if="account.linkedin">
      {{ account.linkedin }}
    </p>
    <p v-else>
      No LinkedIn for Account
    </p>
    <p v-if="account.resume">
      {{ account.resume }}
    </p>
    <p v-else>
      No Resume for Account
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
