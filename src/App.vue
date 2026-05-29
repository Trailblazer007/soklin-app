<script setup lang="ts">
import CampaignModal from "@/components/CampaignModal.vue";
import ProductModal from "@/components/ProductModal.vue";
import SoundtrackPlayer from "@/components/SoundtrackPlayer.vue";

</script>


<template>
  <RouterView v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>

  <ProductModal />
  <SoundtrackPlayer />
  <CampaignModal />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
