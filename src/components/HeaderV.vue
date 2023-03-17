<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <div class="flex justify-between p-5">
    <div>
        <img src="../assets/images/logo.svg" alt="" width="100">
    </div>
    <div>
        <font-awesome-icon :icon="['fas','bars']" />
    </div>
  </div>
</template>