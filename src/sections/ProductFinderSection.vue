<script setup lang="ts">

import { useRouter } from "vue-router";

const categories = [
    {
        label: "White Clothes",
        filter: "white",
    },
    {
        label: "Colored Fabrics",
        filter: "colored",
    },
    {
        label: "Tough Stains",
        filter: "stains",
    },
    {
        label: "Machine Wash",
        filter: "machine",
    },
];

const router = useRouter();

const goToFilter = (filter: string) => {
    router.push(`/products?filter=${filter}`);
};
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
                    <button v-for="category in categories" :key="category.filter" @click="goToFilter(category.filter)">
                        {{ category.label }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-subtitle {
    margin-left: auto;
    margin-right: auto;
}

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