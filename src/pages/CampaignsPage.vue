<script setup lang="ts">
import { computed } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { campaigns } from "@/data/campaigns.ts";
const featuredCampaign = computed(() => campaigns[0]);
</script>

<template>
    <MainLayout>
        <section class="campaigns-page section">
            <div class="container">

                <!-- HERO -->
                <div class="campaigns-hero">
                    <span class="section-tag">SoKlin Experiences</span>

                    <h1 class="section-title">
                        Campaigns & Brand Moments
                    </h1>

                    <p class="section-subtitle">
                        Explore SoKlin's community activations, challenges,
                        and real-world experiences that bring freshness to life.
                    </p>
                </div>

                <!-- FEATURED CAMPAIGN -->
                <div class="featured-campaign">
                    <img :src="featuredCampaign?.image" :alt="featuredCampaign?.title" class="featured-image" />

                    <div class="featured-content">
                        <span class="tag">Featured Campaign</span>

                        <h2>{{ featuredCampaign?.title }}</h2>

                        <p>{{ featuredCampaign?.description }}</p>
                    </div>
                </div>

                <!-- CAMPAIGNS GRID -->
                <div class="campaigns-grid">
                    <div v-for="campaign in campaigns" :key="campaign.id" class="campaign-card">
                        <img :src="campaign.image" :alt="campaign.title" />

                        <div class="campaign-card-content">
                            <h3>{{ campaign.title }}</h3>
                            <p>{{ campaign.description }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
/* HERO */
.campaigns-hero {
    text-align: center;
    margin-bottom: 4rem;
}

.campaigns-hero h1 {
    margin-top: 1rem;
}

.campaigns-hero p {
    max-width: 720px;
    margin: 1.5rem auto 0;
    color: var(--color-text-light);
    line-height: 1.8;
}

/* FEATURED */
.featured-campaign {
    display: grid;
    grid-template-columns: 1.3fr 1fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 5rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
}

.featured-image {
    width: 100%;
    height: 100%;
    min-height: 350px;
    object-fit: cover;
}

.featured-content {
    padding: 2rem;
}

.featured-content h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    margin-top: 1rem;
}

.featured-content p {
    margin-top: 1rem;
    color: var(--color-text-light);
    line-height: 1.8;
}

.tag {
    display: inline-block;
    padding: 0.4rem 0.8rem;
    background: rgba(255, 213, 0, 0.15);
    color: var(--color-secondary);
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
}

/* GRID */
.campaigns-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.campaign-card {
    background: white;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: var(--transition-default);
    cursor: pointer;
}

.campaign-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.campaign-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.campaign-card-content {
    padding: 1.2rem;
}

.campaign-card-content h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
}

.campaign-card-content p {
    margin-top: 0.5rem;
    color: var(--color-text-light);
    font-size: 0.95rem;
    line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 968px) {
    .featured-campaign {
        grid-template-columns: 1fr;
    }

    .campaigns-grid {
        grid-template-columns: 1fr;
    }
}
</style>