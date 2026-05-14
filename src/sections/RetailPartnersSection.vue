<script setup lang="ts">
import { retailers } from "@/data/retailers";
</script>

<template>
    <section class="section">
        <div class="container">
            <div class="retail-header">
                <h2 class="section-title">
                    Find SoKlin Near You
                </h2>

                <p class="section-subtitle">
                    Available through trusted retail partners
                    and supermarkets across Nigeria.
                </p>
            </div>

            <div class="retail-grid">
                <a v-for="retailer in retailers" :key="retailer.id" :href="retailer.link" target="_blank"
                    class="retail-card">
                    <h3>{{ retailer.name }}</h3>

                    <span>Visit Store →</span>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.retail-header {
    text-align: center;
}

.retail-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    margin-top: 4rem;
}

.retail-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
}

.retail-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.retail-card h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
}

.retail-card span {
    display: inline-block;
    margin-top: 1rem;
    color: var(--color-secondary);
    font-weight: 600;
}

@media (max-width: 768px) {
    .retail-grid {
        grid-template-columns: 1fr;
    }
}
</style>