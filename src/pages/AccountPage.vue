<template>
  <div class="about text-center">
    <h3>Welcome</h3>
    <p class="text-wrap">
      {{ account.email }}
    </p>
    <img class="rounded" :src="account.picture" alt="" />
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
    <button @click.prevent="AccountEdit" class="btn btn-primary">
      Edit
    </button>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      dropOpen: false,
      newPost: {}

    })
    return {
      state,
      account: computed(() => AppState.account)
    }
  },
  components: {}
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
</style>
