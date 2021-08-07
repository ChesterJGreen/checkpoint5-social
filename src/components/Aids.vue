<template>
  <div id="aids" class="aids-card row card shadow my-5">
    <img :src="aid.tall" class="w-100">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'

export default {
  name: 'Aids',
  props: {
    aid: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  },
  components: {}
}
</script>
