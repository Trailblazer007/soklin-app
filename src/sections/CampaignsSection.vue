<script setup lang="ts">
import CampaignCard from "@/components/CampaignCard.vue";
import { RouterLink } from "vue-router";
import { campaigns } from "@/data/campaigns";
</script>

<template>
    <section class="section" v-motion :initial="{
        opacity: 0,
        y: 60,
    }" :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
            duration: 700,
        },
    }">
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
                <CampaignCard v-for="campaign in campaigns.slice(0, 2)" :key="campaign.id" :title="campaign.title"
                    :description="campaign.description" :image="campaign.image" />
            </div>

            <div class="campaigns-cta">
                <RouterLink to="/campaigns" class="cta-button">
                    View All Campaigns
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-title {
    text-align: center;
}

.section-subtitle {
    text-align: center;
}

.campaigns-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

.campaigns-cta {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
}

.cta-button {
    padding: 0.9rem 1.4rem;
    border-radius: var(--radius-md);
    background: var(--color-secondary);
    color: black;
    font-weight: 600;
    transition: var(--transition-default);
}

.cta-button:hover {
    opacity: 0.85;
}

@media (max-width: 968px) {
    .campaigns-grid {
        grid-template-columns: 1fr;
    }
}
</style>