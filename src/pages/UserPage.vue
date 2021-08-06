<template>
  <div class="user-page">
    <div class="row bg-light shadow">
      <div class="col-md-12 my-5 d-flex justify-content-center">
        <img src="../assets/img/seej-productions.gif" class="w-75" :alt="my-logo">
      </div>
      <div class="col-md-12 pl-5 mb-5">
        <li>
          <span>Class name/year</span>
        </li>

        <h3>Student Name</h3>

        <li>
          <span> link 1</span>
        </li>
        <li>
          <span> link 2</span>
        </li>
        <li>
          <span> link 3</span>
        </li>
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
export default {
  name: 'UserPage',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
