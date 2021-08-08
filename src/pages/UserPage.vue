<template>
  <div class="user-page">
    <div class="row bg-light shadow">
      <div class="col-md-12 my-5 d-flex justify-content-center" v-if="user.isAuthenticated">
        <AccountPage />
      </div>
      <div class="col-md-12 p-5 m-5" v-else>
        <span>Please Log In</span>
      </div>
    </div>
  </div>
</template>

<script>
import AccountPage from './AccountPage.vue'
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'UserPage',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user)
    }
  },
  components: { AccountPage }
}
</script>

<style lang="scss" scoped>

</style>
