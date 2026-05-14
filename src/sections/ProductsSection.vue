<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/data/products";
</script>

<template>
    <section class="section">
        <div class="container">
            <h2 class="section-title">
                Designed For Every Laundry Need
            </h2>

            <p class="section-subtitle">
                Explore SoKlin products built for freshness,
                brightness, stain removal, and fabric care.
            </p>

            <div class="products-grid">
                <ProductCard v-for="product in products" :key="product.id" :name="product.name"
                    :description="product.description" :image="product.image" :benefits="product.benefits" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

@media (max-width: 968px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
}
</style>