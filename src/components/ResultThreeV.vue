<template>
    <div class="bg-white">
        <p class="p-3 font-bold">{{ newFullShortLink }}</p>
        <hr> 
        <p class="p-3 font-bold text-cyan">{{ newShortlink }}</p>
        <div v-if="clicked"><button  @click="handleCopy" class="bg-cyan w-full h-12 rounded-lg text-xl text-white">Copy</button></div>
        <div v-else><button v @click="handleCopy" class="bg-darkviolet w-full h-12 rounded-lg text-xl text-white">Copied</button></div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { ref } from 'vue';
import { computed } from 'vue'

export default {
    setup() {
        const store = useStore();
        const newShortlink = computed(() => store.state.textUrl.short_link_three);
        const newFullShortLink = computed(() => store.state.textUrl.full_short_link_three);
        const clicked = ref(true);
        const handleCopy = async () => {
            try {
                clicked.value = !clicked.value;
                await navigator.clipboard.writeText(newShortlink.value);
            } catch (e) {
                console.error(e)
            }
        }

        return {
            newShortlink,
            newFullShortLink,
            handleCopy,
            clicked
        }
    },
    mounted() {

    }
}
</script>
<style></style>