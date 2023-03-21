<script setup>
import { ref, onMounted } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}
// const store = useStore();
// const text = computed(() => store.state.textUrl.text);
    
  // computed: mapState({
  //   products: state => state.products.all
  // }),

// lifecycle hooks
onMounted(() => {
  // console.log(text);
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