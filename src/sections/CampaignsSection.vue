<script setup lang="ts">
import CampaignCard from "@/components/CampaignCard.vue";

import { campaigns } from "@/data/campaigns";
</script>

<template>
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                Campaigns That Bring People Together
            </h2>

            <p class="section-subtitle">
                Discover community-driven experiences,
                giveaways, challenges, and energetic
                SoKlin activations.
            </p>

            <div class="campaigns-grid">
                <CampaignCard v-for="campaign in campaigns" :key="campaign.id" :title="campaign.title"
                    :description="campaign.description" :image="campaign.image" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.campaigns-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

@media (max-width: 968px) {
    .campaigns-grid {
        grid-template-columns: 1fr;
    }
}
</style>