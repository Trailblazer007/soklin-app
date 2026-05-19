<script setup lang="ts">
import { storeToRefs } from "pinia";

import { useCampaignModal } from "@/stores/campaignModal";

const campaignModalStore = useCampaignModal();

const { isOpen, selectedCampaign } =
    storeToRefs(campaignModalStore);

const { closeModal } = campaignModalStore;
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="closeModal">
                ×
            </button>

            <img :src="selectedCampaign?.image" :alt="selectedCampaign?.title" class="modal-image" />

            <h2>
                {{ selectedCampaign?.title }}
            </h2>

            <p class="modal-description">
                {{ selectedCampaign?.description }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 3000;
    padding: 1rem;
}

.modal-content {
    width: min(100%, 650px);

    background: white;
    border-radius: var(--radius-lg);

    overflow: hidden;

    animation: modalFade 0.25s ease;
}

.modal-image {
    width: 100%;
    height: 320px;
    object-fit: cover;
}

.modal-content h2 {
    padding: 1.5rem 1.5rem 0;
    font-family: "Poppins", sans-serif;
}

.modal-description {
    padding: 1rem 1.5rem 2rem;
    color: var(--color-text-light);
    line-height: 1.7;
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;

    width: 42px;
    height: 42px;

    border-radius: 50%;
    background: white;

    font-size: 1.5rem;
    box-shadow: var(--shadow-sm);
}

@keyframes modalFade {
    from {
        opacity: 0;
        transform: translateY(10px) scale(0.98);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}
</style>