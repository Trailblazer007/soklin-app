<script setup lang="ts">
defineProps<{
    name: string;
    description: string;
    image: string;
    benefits: string[];
}>();
</script>

<template>
    <div class="product-card">
        <div class="image-wrapper">
            <img :src="image" :alt="name" class="product-image" loading="lazy" />
        </div>

        <div class="product-content">
            <h3>{{ name }}</h3>

            <p>{{ description }}</p>

            <div class="product-benefits">
                <span v-for="benefit in benefits" :key="benefit">
                    {{ benefit }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image-wrapper {
    overflow: hidden;
    background: var(--color-surface);
}

.product-card {
    overflow: hidden;
    border-radius: var(--radius-lg);
    background: white;
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-md);
}

.product-image {
    width: 100%;
    height: 320px;
    object-fit: contain;
    background: var(--color-surface);
    padding: 2rem;
    transition: transform 0.5s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.product-content {
    padding: 1.5rem;
}

.product-content h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
}

.product-content p {
    margin-top: 1rem;
    color: var(--color-text-light);
    line-height: 1.7;
}

.product-benefits {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.5rem;
}

.product-benefits span {
    padding: 0.5rem 0.8rem;
    border-radius: 999px;
    background: rgba(255, 213, 0, 0.15);
    font-size: 0.85rem;
    font-weight: 600;
}
</style>