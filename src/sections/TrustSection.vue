<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useReveal } from "@/composables/useReveal";

const sectionRef = ref(null);

onMounted(() => {
    useReveal(sectionRef);
});
</script>

<template>
    <section ref="sectionRef" class="section">
        <div class="container">
            <div class="trust-grid">
                <div class="trust-card">
                    <h3>15+ Years</h3>
                    <p>Trusted household recognition across Nigeria.</p>
                </div>

                <div class="trust-card">
                    <h3>570K+</h3>
                    <p>Facebook community followers and growing engagement.</p>
                </div>

                <div class="trust-card">
                    <h3>Millions</h3>
                    <p>Consumers reached through products and campaigns.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.trust-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
}

.trust-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
    cursor: pointer;
}

.trust-card h3 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
}

.trust-card p {
    margin-top: 1rem;
    line-height: 1.7;
    color: var(--color-text-light);
}

.trust-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
    .trust-grid {
        grid-template-columns: 1fr;
    }
}
</style>