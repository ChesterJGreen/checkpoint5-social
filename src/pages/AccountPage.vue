<template>
  <div class="about text-center mt-5">
    <h3>Welcome</h3>
    <p class="text-wrap">
      {{ account.email }}
    </p>
    <img class="rounded" :src="account.picture" alt="" />
    <i v-if="account.graduated=true" class="mdi mdi-24px mdi-school-outline"></i>
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
    <button type="submit" @click.prevent="updateUser" aria-hidden="true" class="btn btn-primary action">
      Edit
    </button>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import Swal from 'sweetalert2'
import Pop from '../utils/Notifier'
import { logger } from '../utils/Logger'
import { postsService } from '../services/PostsService'

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      dropOpen: false,
      newPost: {},
      accountInfo: {}

    })
    return {
      state,
      account: computed(() => AppState.account),
      async editAccount() {
        try {
          logger.log('editing account')
          await postsService.editAccount(state.accountInfo)
          Pop.toast('Account Edited', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async updateUser() {
        try {
          const className = () => {
            if (this.account.class) {
              return this.account.class
            } else {
              return 'No class'
            }
          }
          const classPicture = () => {
            if (this.account.picture) {
              return this.account.picture
            } else {
              return 'No Picture'
            }
          }
          const classGithub = () => {
            if (this.account.github) {
              return this.account.github
            } else {
              return 'No Github'
            }
          }
          const classLinkedin = () => {
            if (this.account.linkedin) {
              return this.account.linkedin
            } else {
              return 'No Linkedin'
            }
          }
          const classResume = () => {
            if (this.account.resume) {
              return this.account.resume
            } else {
              return 'No Resume'
            }
          }

          logger.log('capturing edit')
          const { value: formValues } = await Swal.fire({
            title: 'Edit Account Info',
            html:
    `<div><label>Name</label> 
    <input id="editname" placeholder="${this.account.name}" class="swal2-input" v-model="state.accountInfo.name"></div> 
    <div><label>Class</label> 
    <input id="editclass"  placeholder="${className()}" class="swal2-input" v-model="state.accountInfo.class"></div> 
    <div><label>Picture</label> 
    <input id="editpicture" placeholder="${classPicture()}" class="swal2-input" v-model="state.accountInfo.picture"></div> 
    <div><label>Github</label> 
    <input id="editgithub" placeholder="${classGithub()}" class="swal2-input" v-model="state.accountInfo.github"></div> 
    <div><label>LinkedIn</label> 
    <input id="editlinkedin" placeholder="${classLinkedin()}" class="swal2-input" v-model="state.accountInfo.linkedin"></div>
    <div><label>Resume</label> 
    <input id="editresume" placeholder="${classResume()}" class="swal2-input" v-model="state.accountInfo.resume"></div>`,
            focusConfirm: false,
            preConfirm: () => {
              return [
                document.getElementById('editname').value,
                document.getElementById('editpicture').value,
                document.getElementById('editgithub').value,
                document.getElementById('editlinkedin').value,
                document.getElementById('editresume').value,
                document.getElementById('editclass').value
              ]
            }
          })

          if (formValues) {
            Swal.fire(formValues)
            this.editAccount()
          }
        } catch (e) {
          Pop.toast('You Updated Your information')
        }
      }
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
body.swal2-shown > [aria-hidden="true"] {
  filter: blur(10px);
}
body > * {
  transition: 0.1s filter linear;
}
</style>
