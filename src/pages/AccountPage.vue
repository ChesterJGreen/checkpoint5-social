<template>
  <div class="about text-center mt-5">
    <h3>Welcome</h3>
    <p class="text-wrap">
      {{ account.name }}
    </p>
    <img class="rounded w-100" :src="account.picture" alt="" />
    <i v-if="account.graduated" class="mdi mdi-24px mdi-school-outline"></i>
    <p v-if="account.class">
      {{ account.class }}
    </p>
    <p v-else>
      No Class
    </p>
    <p v-if="account.bio">
      {{ account.bio }}
    </p>
    <p v-else>
      No Bio for account
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
import { accountService } from "../services/AccountService"

export default {
  name: 'Account',
  setup() {
    const state = reactive({
      dropOpen: false,
      newPost: {},
      accountInfo: {
        name: '',
        class: '',
        picture: '',
        github: '',
        linkedin: '',
        resume: ''
      }

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
          const classCoverImg = () => {
            if (this.account.coverImg) {
              return this.account.coverImg
            } else {
              return 'No Cover Image'
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
    `<div class="container"><div class="row">
      <div class="col-3 p-0 align-self-center"><label>Name</label></div>
      <div class="col-8 p-0"><input id="editname" placeholder="${this.account.name}" class="swal2-input m-0" v-model="state.accountInfo.name" value="${this.account.name}"></div> 
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>Class</label></div>
      <div class="col-8 p-0"><input id="editclass"  placeholder="${className()}" class="swal2-input m-0" v-model="state.accountInfo.class"></div> 
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>Picture</label></div>
      <div class="col-8 p-0"><input id="editpicture" placeholder="${classPicture()}" class="swal2-input m-0" v-model="state.accountInfo.picture"></div> 
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>Cover Image</label></div>
      <div class="col-8 p-0"><input id="editCoverImg" placeholder="${classCoverImg()}" class="swal2-input m-0" v-model="state.accountInfo.coverImg"></div> 
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>Github</label></div>
      <div class="col-8 p-0"><input id="editgithub" placeholder="${classGithub()}" class="swal2-input m-0" v-model="state.accountInfo.github"></div>
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>LinkedIn</label></div>
      <div class="col-8 p-0"><input id="editlinkedin" placeholder="${classLinkedin()}" class="swal2-input m-0" v-model="state.accountInfo.linkedin"></div>
    </div>
    <div class="row my-3">
      <div class="col-3 p-0 align-self-center"><label>Resume</label></div>
      <div class="col-8 p-0"><input id="editresume" placeholder="${classResume()}" class="swal2-input m-0" v-model="state.accountInfo.resume"></div>
    </div>`,
            focusConfirm: false,
            preConfirm: () => {
              return {
                name: document.getElementById('editname').value === '' && this.account.name !== '' ? this.account.name : document.getElementById('editname').value,
                picture: document.getElementById('editpicture').value === '' && this.account.picture !== '' ? this.account.picture : document.getElementById('editpicture').value,
                coverImg: document.getElementById('editCoverImg').value === '' && this.account.coverImg !== '' ? this.account.coverImg : document.getElementById('editCoverImg').value,
                github: document.getElementById('editgithub').value === '' && this.account.github !== '' ? this.account.github : document.getElementById('editgithub').value,
                linkedin: document.getElementById('editlinkedin').value === '' && this.account.linkedin !== '' ? this.account.linkedin : document.getElementById('editlinkedin').value,
                resume: document.getElementById('editresume').value === '' && this.account.resume !== '' ? this.account.resume : document.getElementById('editresume').value,
                class: document.getElementById('editclass').value === '' && this.account.class !== '' ? this.account.class : document.getElementById('editclass').value
              }
            }
          })
          logger.log(JSON.stringify(formValues))
          if (formValues) {
            Swal.fire('Account Info Updated')
          }
          state.accountInfo = formValues
          await accountService.editAccount(formValues)
          logger.log(state.accountInfo.name)
        } catch (e) {
          Pop.toast("Didn't work" + e, 'error')
          console.log(e)
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
