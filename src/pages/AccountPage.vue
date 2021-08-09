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
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
    >
      Edit
    </button>
  </div>
  <div class="modal fade"
       id="create-project"
       tabindex="-1"
       role="dialog"
       aria-labelledby="create-project"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            New Post
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createPost">
            <div class="form-group">
              <label class="pr-2" for="title">Title</label>
              <input type="text"
                     id="title"
                     class="form-control"
                     required
                     placeholder="Title..."
                     v-model="state.newPost.title"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="imgUrl">Cover Image</label>
              <input type="text"
                     id="imgUrl"
                     class="form-control"
                     required
                     placeholder="Image Url..."
                     v-model="state.newPost.imgUrl"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="photos">Inspiration Images</label>
              <textarea type="text"
                        id="photos"
                        class="form-control"
                        placeholder="Image Urls..."
                        v-model="state.newPost.photoString"
              ></textarea>
              <small class="text-muted">add many urls seperated by a line break. Current Photos:</small>
              <small>{{ photos }}</small>
            </div>
            <div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
