<script setup lang="ts">
import { computed, ref } from "vue";

import MainLayout from "@/layouts/MainLayout.vue";

import ProductCard from "@/components/ProductCard.vue";

import { products } from "@/data/products";

const searchQuery = ref("");

const filteredProducts = computed(() => {
    const query = searchQuery.value
        .trim()
        .toLowerCase();

    if (!query) {
        return products;
    }

    return products.filter((product) =>
        product.name
            .toLowerCase()
            .includes(query)
    );
});
</script>

<template>
    <MainLayout>
        <section class="products-page section">
            <div class="container">
                <div class="products-header">
                    <h1 class="section-title">
                        Explore The SoKlin Product Range
                    </h1>

                    <p class="section-subtitle">
                        Discover detergents engineered for
                        freshness, stain removal, fragrance,
                        machine washing, and everyday family care.
                    </p>
                </div>

                <div class="search-wrapper">
                    <input v-model="searchQuery" type="text" placeholder="Search products..." class="search-input" />
                </div>

                <div v-if="filteredProducts.length" class="products-grid">
                    <ProductCard v-for="product in filteredProducts" :key="product.id" :name="product.name"
                        :description="product.description" :image="product.image" :benefits="product.benefits"
                        :category="product.category" :sizes="product.sizes" />
                </div>

                <div v-else class="empty-state">
                    <h3>No products found</h3>

                    <p>
                        Try searching with another keyword.
                    </p>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
.products-header {
    text-align: center;
}

.search-wrapper {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
}

.search-input {
    width: min(100%, 500px);
    padding: 1rem 1.2rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: white;
    font-size: 1rem;
    transition: var(--transition-default);
}

.search-input:focus {
    border-color: var(--color-secondary);
    box-shadow: var(--shadow-sm);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

.empty-state {
    margin-top: 5rem;
    text-align: center;
}

.empty-state h3 {
    font-size: 1.5rem;
    font-family: "Poppins", sans-serif;
}

.empty-state p {
    margin-top: 1rem;
    color: var(--color-text-light);
}

@media (max-width: 968px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}
</style>