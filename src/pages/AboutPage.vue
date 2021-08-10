<template>
  <div class="about text-center card shadow rounded py-3">
    <h3>Welcome</h3>
    <p class="text-wrap">
      {{ account.email }}
    </p>
    <img class="rounded w-25 align-self-center" :src="account.picture" alt="" />
    <p v-if="account.class">
      {{ account.class }}
    </p>
    <p v-else>
      No Class
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
import { AppState } from '../AppState'
import { computed } from 'vue'

export default {
  name: 'AboutPage',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>
