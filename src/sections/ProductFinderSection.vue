<script setup lang="ts">
const categories = [
    "White Clothes",
    "Colored Fabrics",
    "Tough Stains",
    "Machine Wash",
];
</script>

<template>
    <section class="section finder-section">
        <div class="container">
            <div class="finder-box">
                <h2 class="section-title">
                    What Are You Washing Today?
                </h2>

                <p class="section-subtitle">
                    Discover the right SoKlin product for your laundry needs.
                </p>

                <div class="finder-options">
                    <button v-for="category in categories" :key="category">
                        {{ category }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.finder-section {
    background: var(--color-surface);
}

.finder-box {
    text-align: center;
}

.finder-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;
}

.finder-options button {
    padding: 1rem 1.4rem;
    border-radius: 999px;
    background: white;
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
}

.finder-options button:hover {
    background: var(--color-primary);
}
</style>