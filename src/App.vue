<script setup>
import BannerV from './components/BannerV.vue';
import HeaderV from './components/HeaderV.vue';
import InputV from './components/InputV.vue';
import AdvancedV from './components/AdvancedV.vue';
import BrandV from './components/BrandV.vue';
import BoostV from './components/BoostV.vue';
import FooterV from './components/FooterV.vue';
</script>

<template >
  <div class="bg-gray">
    <header>
      <HeaderV />
    </header>
    <section>
      <BannerV />
    </section>
    <section>
      <InputV />
    </section>
    <section>
      <AdvancedV />
    </section>
    <section>
      <BrandV />
    </section>
    <section>
      <BoostV />
    </section>
    <section>
      <FooterV />
    </section>
  </div>
</template>

<style scoped>
</style>
