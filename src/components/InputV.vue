<template>
  <div class="mobie:flex mobile:flex-col bg-darkviolet w-10/12 h-44 m-auto mt-10 rounded-lg laptop:flex-row">
    <div
      class="mobile:bg-input-bg laptop:bg-input-laptop-bg laptop:bg-cover z-10 h-full bg-no-repeat mobile:bg-right-top">
      <form v-on:submit.prevent="onSubmit">
        <div class="laptop:flex">
          <div class="laptop:w-8/12 laptop:mt-16 laptop:ml-10">
            <div class="mobile:px-6 mobile:pt-6 mobile:pb-3 "><input type="text" ref="input" v-model="inputValue" class="w-full h-12 rounded-lg"
                name="" id="" placeholder=" Shorten a link here..."></div>
            <span v-if="inputError" class="text-red-500 pl-6 text-red">{{ inputError }}</span>
          </div>
          <div class="px-6 laptop:w-1/6 laptop:mt-16"><button type="submit"
              class="bg-cyan w-full h-12 rounded-lg text-xl text-white ">Shorten
              It!</button></div>
        </div>

      </form>
    </div>
  </div>
  <ResultOneV v-show="getNewStatus" class="p-6 m-6" />
  <ResultTwoV v-show="getNewStatus" class="p-6 m-6" />
  <ResultThreeV v-show="getNewStatus" class="p-6 m-6" />
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref, watchEffect } from 'vue';
import ResultOneV from './ResultOneV.vue';
import ResultTwoV from './ResultTwoV.vue';
import ResultThreeV from './ResultThreeV.vue';
import validator from 'validator'


export default {
  setup() {
    //store
    const store = useStore();
    //get data in store (state, getters)
    //state
    const getnewlinkstate = computed(() => store.state.textUrl.newlinkOne);
    const newStatus = computed(() => store.state.textUrl.status);
    //getters
    const newlink = computed(() => store.getters['textUrl/getnewLink']);
    const getNewStatus = computed(() => store.getters['textUrl/checkStatus']);

    //interact template
    const inputValue = ref("");
    const inputError = ref("");

    const validateInput = () => {
      if (!inputValue.value) {
        inputError.value = "Please add a link";
        return false;
      }
      if (!validator.isURL(inputValue.value)) {
        inputError.value = "Input must be a valid URL";
        return false;
      }
      inputError.value = "";
      return true;
    };

    //handle template
    const onSubmit = () => {
      // console.log(inputValue.value);
      let textUrl = inputValue.value;
      // example implement commit into mutations
      store.commit("textUrl/setUrlTestOne", textUrl);
      // implement dispatch into actions
      const isValid = validateInput();
      if (isValid) {
        store.dispatch("textUrl/getUrlAPI", textUrl);
      }
      else {
        //
      }
    };

    return {
      inputValue,
      inputError,
      onSubmit,
      newlink,
      getnewlinkstate,
      getNewStatus,
    };
  },

  //check where data is?
  mounted() {
    //check data before action async
  },
  updated() {
    //check data after action async
    console.log(this.newlink);
    console.log(this.getnewlinkstate);
  },
  components: { ResultOneV, ResultTwoV, ResultThreeV }
}
</script>