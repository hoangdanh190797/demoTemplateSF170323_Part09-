<template>
    <div class="flex flex-col bg-darkviolet w-10/12 h-44 m-auto mt-10 rounded-lg">
        <div class="bg-input-bg z-10 h-full bg-no-repeat bg-right-top">
            <div class="p-6"><input class="w-full h-12 rounded-lg" type="text" name="" id="" placeholder=" Shorten a link here..."></div>
            <div class="px-6"><button class="bg-cyan w-full h-12 rounded-lg text-xl text-white">Shorten It!</button></div>
        </div>
    </div>
</template>
<script>
// reactive state
// functions that mutate state and trigger updates
// lifecycle hooks
import { computed } from 'vue'
import { useStore } from 'vuex'
// import { currency } from '../currency'

export default {
  setup () {
    const store = useStore()

    const url = computed(() => store.state.products.url)

    // const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)
    const getUrl = (url) => store.dispatch('url/getUrl', url)

    store.dispatch('products/getAllProducts')

    return {
    //   products,
    //   addProductToCart,
    //   currency
    }
  }
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