<template>
  <div class="user-page">
    <div class="row bg-light shadow">
      <div class="col-md-12 my-5 d-flex justify-content-center">
        <AccountPage />
      </div>
      <div class="col-md-12 pl-5 mb-5">
        <button class="btn btn-primary">
          Mobile
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AccountPage from './AccountPage.vue'
export default {
  name: 'UserPage',
  setup() {
    return {}
  },
  components: { AccountPage }
}
</script>

<style lang="scss" scoped>

</style>
