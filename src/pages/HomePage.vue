<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row my-4">
      <div class="col-md-8 md-pl-3">
        <div class="row">
          <div class="col-md-12">
            <div id="create-post" class="row card shadow">
              <div class="col-md-12 ">
                <div class="row">
                  <div class="col-md-2 m-auto">
                    <img :src="account.picture" class="w-100" alt="{{account.name}}">
                  </div>
                  <div class="col-md-8 m-auto">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Example textarea</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 p-2">
                    <button type="submit" class="btn btn-success action">
                      Add Photo/Video
                    </button>
                  </div>
                  <div class="col-md-6 p-2">
                    <button type="submit" class="btn btn-success action">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <PostsThread :posts="posts" />
          </div>
        </div>
      </div>
      <div class="col-md-4 px-4">
        <AidsThread :aids="aids" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import PostsThread from '../components/PostsThread.vue'
import AidsThread from '../components/AidsThread.vue'
import { aidsService } from '../services/AidsService'
import AccountPage from './AccountPage.vue'

export default {
  name: 'Home',

  setup() {
    onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    onMounted(async() => {
      try {
        await aidsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    return {
      posts: computed(() => AppState.posts),
      aids: computed(() => AppState.aids),
      account: computed(() => AppState.account)
    }
  },
  components: {
    PostsThread,
    AidsThread,
    AccountPage
  }
}
</script>
<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
