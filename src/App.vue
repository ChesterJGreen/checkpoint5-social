<template>
  <header>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          <UserPage />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-12 p-0">
              <Navbar />
            </div>
          </div>
          <div class="row ml-5">
            <div class="col-md-12">
              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import UserPage from './pages/UserPage.vue'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: {
    UserPage
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.action:hover {
  cursor: pointer;
}

</style>
