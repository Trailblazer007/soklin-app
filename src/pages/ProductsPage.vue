<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/data/products";

const route = useRoute();
const searchQuery = ref("");

const filteredProducts = computed(() => {
    const query = searchQuery.value
        .trim()
        .toLowerCase();

    const activeFilter = route.query.filter
        ?.toString()
        .toLowerCase();

    return products.filter((product) => {
        const matchesSearch =
            !query ||
            product.name
                .toLowerCase()
                .includes(query);

        const matchesFilter =
            !activeFilter ||
            product.tags.includes(activeFilter);

        return matchesSearch && matchesFilter;
    });
});
</script>

<template>
    <MainLayout>
        <section class="products-page section">
            <div class="container">

                <!-- PAGE HEADER (CLEANED) -->
                <div class="products-header">
                    <span class="section-tag">
                        SoKlin Product Range
                    </span>

                    <h1 class="section-title">
                        Explore Our Products
                    </h1>

                    <p class="section-subtitle">
                        Discover SoKlin's full range of detergents designed
                        for brighter washes, long-lasting freshness, stain
                        removal, and everyday fabric care.
                    </p>
                </div>

                <!-- SEARCH -->
                <div class=" search-wrapper">
                    <div class="search-input-wrapper">
                        <span class="search-icon">🔍</span>

                        <input v-model="searchQuery" type="text" placeholder="Search products..."
                            class="search-input" />
                    </div>
                </div>

                <!-- PRODUCTS GRID -->
                <div v-if="filteredProducts.length" class="products-grid">
                    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
                </div>

                <!-- EMPTY STATE -->
                <div v-else class="empty-state">
                    <h3>No products found</h3>
                    <p>Try searching with another keyword.</p>
                </div>

            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
.products-header {
    text-align: center;
    margin-bottom: 2rem;
}

/* SEARCH */
.search-wrapper {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
}

.search-input-wrapper {
    position: relative;
    width: min(100%, 500px);
}

.search-icon {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1rem;
    opacity: 0.6;
}

.search-input {
    width: 100%;
    padding: 1rem 1.2rem 1rem 2.6rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: white;
    font-size: 1rem;
    transition: var(--transition-default);
}

.search-input:focus {
    border-color: var(--color-secondary);
    box-shadow: var(--shadow-sm);
    outline: none;
}

/* GRID */
.products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

/* EMPTY STATE */
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

/* RESPONSIVE */
@media (max-width: 968px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}
</style>