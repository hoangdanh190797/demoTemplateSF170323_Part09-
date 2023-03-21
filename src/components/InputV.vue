<template>
  <div class="flex flex-col bg-darkviolet w-10/12 h-44 m-auto mt-10 rounded-lg">
    <div class="bg-input-bg z-10 h-full bg-no-repeat bg-right-top">
      <form v-on:submit.prevent="onSubmit">
        <div class="p-6"><input
          type="text"
          ref="input"
          v-model="inputValue"
          class="w-full h-12 rounded-lg"  name="" id=""
            placeholder=" Shorten a link here..."></div>
        <div class="px-6"><button
          type="submit"
          class="bg-cyan w-full h-12 rounded-lg text-xl text-white">Shorten It!</button></div>
      </form>

    </div>
  </div>
</template>
<script>
// reactive state
// functions that mutate state and trigger updates
// lifecycle hooks
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue';
// import { currency } from '../currency'

export default {
  setup() {
    const store = useStore();

    const text = computed(() => store.state.textUrl.text);
    const urlTestOne = computed(() => store.state.textUrl.urlTestOne);
    const inputValue = ref('')


    const onSubmit = () =>{
      console.log(inputValue.value);
      let textUrl = inputValue.value
      store.dispatch('textUrl/getUrlAPI', textUrl)
      store.commit('textUrl/setUrlTestOne', textUrl)
    }

    return {
      // url,
      text,
      inputValue,
      urlTestOne,
      onSubmit
    }
  },
  beforeCreate() {
    console.log(this.text);
  },
  mounted() {
    console.log(this.text);
    // console.log(this.url);
    //Payload đã nhận data;
    console.log(this.urlTestOne);
  },
  
  // computed: mapState({
  //   products: state => state.products.all
  // }),
  // methods: mapActions('cart', [
  //   'addProductToCart'
  // ]),
  // created () {
  //   this.$store.dispatch('products/getAllProducts')
  // }
}
</script>