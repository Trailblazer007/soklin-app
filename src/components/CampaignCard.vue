<script setup lang="ts">
import { useCampaignModal } from "@/stores/campaignModal";

defineProps<{
    title: string;
    description: string;
    image: string;
}>();

const { openModal } = useCampaignModal();
</script>

<template>
    <div class="campaign-card" @click="openModal({ title, description, image })">
        <img :src="image" :alt="title" class="campaign-image" />

        <div class="campaign-content">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.campaign-card {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background: white;
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
    cursor: pointer;
}

.campaign-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-md);
}

.campaign-image {
    width: 100%;
    height: 340px;
    object-fit: cover;
}

.campaign-content {
    padding: 1.5rem;
}

.campaign-content h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
}

.campaign-content p {
    margin-top: 1rem;
    color: var(--color-text-light);
    line-height: 1.7;
}

.campaign-content button {
    margin-top: 1.5rem;
    padding: 0.9rem 1.2rem;
    border-radius: var(--radius-md);
    background: var(--color-secondary);
    color: white;
    transition: var(--transition-default);
}

.campaign-content button:hover {
    background: var(--color-secondary-dark);
}
</style>