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
          <div class="row ml-2">
            <div class="col-md-8">
              <router-view />
            </div>

            <div class="col-md-4 px-4">
              <AidsThread :aids="aids" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import UserPage from './pages/UserPage.vue'
import AidsThread from './components/AidsThread.vue'
import { aidsService } from './services/AidsService'
import Pop from './utils/Notifier'

export default {
  name: 'App',
  setup() {
    onMounted(async() => {
      try {
        await aidsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      appState: computed(() => AppState),
      aids: computed(() => AppState.aids)
    }
  },
  components: {
    UserPage,
    AidsThread
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.action:hover {
  cursor: pointer;
}

</style>
