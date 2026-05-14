<script setup lang="ts">
import BaseButton from "@/components/BaseButton.vue";

import soklinConc from "@/assets/images/products/soklin-upgrade.jpg";
</script>

<template>
    <section class="hero-section">
        <div class="hero-accent hero-accent-one"></div>
        <div class="hero-accent hero-accent-two"></div>
        <div class="container hero-container">
            <div class="hero-content">
                <span class="hero-badge">
                    Trusted by millions across Nigeria
                </span>

                <h1 class="hero-title">
                    Faster.
                    <br />
                    Brighter.
                    <br />
                    Cleaner.
                </h1>

                <p class="hero-description">
                    A modern laundry experience inspired by one of
                    Nigeria's most recognizable detergent brands.
                </p>

                <div class="hero-actions">
                    <BaseButton label="Explore Products" />

                    <BaseButton label="View Campaigns" variant="secondary" />
                </div>
            </div>

            <div class="hero-visual">
                <div class="hero-circle"></div>

                <img :src="soklinConc" alt="SoKlin product" class="hero-product" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.hero-accent {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.18;
}

.hero-accent-one {
    width: 300px;
    height: 300px;
    background: var(--color-primary);
    top: -100px;
    left: -100px;
}

.hero-accent-two {
    width: 260px;
    height: 260px;
    background: var(--color-secondary);
    bottom: -80px;
    right: -80px;
}

.hero-section {
    position: relative;
    overflow: hidden;
    padding: 7rem 0;
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
}

.hero-badge {
    display: inline-flex;
    padding: 0.5rem 1rem;
    background: rgba(255, 213, 0, 0.15);
    color: var(--color-secondary);
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
}

.hero-title {
    margin-top: 1.5rem;
    font-family: "Poppins", sans-serif;
    font-size: clamp(3.5rem, 8vw, 6rem);
    line-height: 0.95;
    font-weight: 700;
}

.hero-description {
    margin-top: 1.5rem;
    max-width: 540px;
    color: var(--color-text-light);
    line-height: 1.8;
    font-size: 1.05rem;
}

.hero-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-circle {
    position: absolute;
    width: 450px;
    height: 450px;
    background: var(--color-primary);
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.25;
}

.hero-product {
    position: relative;
    z-index: 2;
    width: min(100%, 420px);
    object-fit: contain;
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0px);
    }
}

@media (max-width: 968px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .hero-content {
        order: 2;
    }

    .hero-visual {
        order: 1;
    }

    .hero-actions {
        justify-content: center;
        flex-wrap: wrap;
    }

    .hero-description {
        margin-inline: auto;
    }
}
</style>