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
    <!-- <button data-swal-toast-template="#my-template" @click="updateUser" aria-hidden="true" class="btn btn-primary">
      Edit
    </button> -->
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import Swal from 'sweetalert2'
import Pop from '../utils/Notifier'

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
  components: {},
  async updateUser() {
    try {
      const graduate = { key: 'graduated', key2: 'non-graduated' }
      const { value: formValues } = await Swal.fire({
        title: 'Edit Account Info',
        html:
        `<input type="radio" inputOptions: ${graduate}' +
    <input id="name" class="swal2-input"> +
    <input id="class" class="swal2-input"> +
    <input id="picture" class="swal2-input"> +
    <input id="github" class="swal2-input"> +
    <input id="linkedin" class="swal2-input"> +
    <input id="resume" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('picture').value,
            document.getElementById('github').value,
            document.getElementById('linkedin').value,
            document.getElementById('resume').value,
            document.getElementById('class').value
          ]
        }
      })

      if (formValues) {
        Swal.fire(formValues)
      }
    } catch (e) {
      Pop.toast('You Updated Your information')
    }
  }
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
body.swal2-shown > [aria-hidden="true"] {
  filter: blur(10px);
}
body > * {
  transition: 0.1s filter linear;
}
</style>
