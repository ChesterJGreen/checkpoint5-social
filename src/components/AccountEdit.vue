<template>
  <div class="account-edit about text-center">
    <h3>Edit your account info</h3>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Name</label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Name...">
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Class</label>
          <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Class...">
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress">Picture</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Picture">
      </div>
      <div class="form-group">
        <label for="inputAddress2">Github</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Github...">
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">Linkedin</label>
          <input type="text" class="form-control" id="inputCity" placeholder="Linkedin...">
        </div>
        <div class="form-group col-md-6">
          <label for="inputZip">Resume</label>
          <input type="text" class="form-control" id="inputZip" placeholder="Resume...">
        </div>
      </div>
      <button type="submit" @submit.prevent="User.info" class="btn btn-primary action">
        Sign in
      </button>
    </form>
  </div>
</template>
<script>

export default {
  name: 'AccountEdit',
  setup() {

  }
}
</script>
