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
  <div class="flex justify-between p-5 laptop:pl-24">
    <div class="flex m-3">
      <div class="m-3 laptop:m-10">
        <img class="laptop:w-[175px]" src="../assets/images/logo.svg" alt="" width="100">
      </div>
      <div class="mobile:hidden">
        <ul class="flex mt-12">
          <li class="mr-6 font-bold text-grayishviolet">Features</li>
          <li class="mr-6 font-bold text-grayishviolet">Pricing</li>
          <li class="font-bold text-grayishviolet">Resource</li>
        </ul>
      </div>
    </div>
    <div class="mobile:hidden mt-10 mr-28">
      <button class="font-bold rounded-full w-40 h-10 text-grayishviolet text-lg">Login</button>
      <button class="font-bold bg-cyan rounded-full w-40 h-10 text-white text-lg">Sign Up</button>
    </div>
    <div class="laptop:hidden pt-4 pr-4">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
  </div>
</template>