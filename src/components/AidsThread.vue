<template>
  <div class="col-12 shadow" v-for="a in aids" :key="a" :aid="a">
    <Aids :aid="a" />
  </div>
</template>

<script>

export default {
  name: 'AidsThread',
  props: {
    aids: {
      type: Object,
      required: true
    }
  }
}
</script>
