<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="row my-4">
      <div class="col-md-8 md-px-5">
        <div class="row">
          <div class="col-md-12">
            <div id="create-post" class="row card shadow">
              <div class="col-md-12 ">
                <div class="row">
                  <div class="col-md-2 m-auto">
                    <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" class="w-100" alt="CodeWorks Logo">
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

            <div id="post" class="row card shadow my-5">
              <div class="col-md-12 ">
                <div class="row">
                  <div class="col-md-2 m-3">
                    <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" class="w-100" alt="CodeWorks Logo">
                  </div>
                  <div class="col-md-8 text-left p-3">
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat debitis repudiandae, quas fugit odit consequuntur cupiditate aspernatur nostrum odio sunt laboriosam expedita voluptate placeat consequatur aut blanditiis! Distinctio iste delectus eaque laudantium qui enim error est tenetur debitis unde, minima esse ex optio veritatis sapiente sunt sequi labore in?</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 p-0">
                    <img src="https://images.unsplash.com/photo-1628191078376-f31a36c9f2cf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" class="w-100">
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 p-2">
                  </div>
                  <div class="col-md-6 p-2">
                    <button type="submit" class="btn btn-success action">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 p-5">
        <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" class="w-100" alt="CodeWorks Logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
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
