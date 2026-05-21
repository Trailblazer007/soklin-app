<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useProductModal } from "@/stores/productModal";

const { selectedProduct, isOpen, closeModal } = useProductModal();

const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
        closeModal();
    }
};

onMounted(() => {
    window.addEventListener("keydown", handleEsc);
});

onUnmounted(() => {
    window.removeEventListener("keydown", handleEsc);
});
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click="closeModal">
        <div v-if="selectedProduct" class="modal-content" @click.stop>
            <button class="close-btn" @click="closeModal" aria-label="Close product details">
                x
            </button>

            <img :src="selectedProduct.image" :alt="selectedProduct.name" class="modal-image" />

            <div class="modal-body">
                <span class="category">
                    {{ selectedProduct.category }}
                </span>

                <h2>
                    {{ selectedProduct.name }}
                </h2>

                <p class="description">
                    {{ selectedProduct.description }}
                </p>

                <div class="sizes">
                    <span v-for="size in selectedProduct.sizes" :key="size" class="size-pill">
                        {{ size }}
                    </span>
                </div>

                <ul class="benefits">
                    <li v-for="benefit in selectedProduct.benefits" :key="benefit">
                        {{ benefit }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    z-index: 999;
}

.modal-content {
    position: relative;
    width: min(720px, 100%);
    max-height: 90vh;
    overflow-y: auto;
    background: white;
    border-radius: var(--radius-lg);
    padding: 2rem;
    box-shadow: var(--shadow-lg);
}

.modal-image {
    width: 100%;
    height: 320px;
    object-fit: contain;
    background: var(--color-surface);
    border-radius: var(--radius-md);
    padding: 1rem;
}

.modal-body {
    margin-top: 2rem;
}

.category {
    display: inline-block;
    color: var(--color-secondary);
    font-weight: 600;
    margin-bottom: 1rem;
}

.description {
    margin-top: 1rem;
    line-height: 1.8;
    color: var(--color-text-light);
}

.sizes {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1.5rem;
}

.size-pill {
    padding: 0.5rem 0.9rem;
    border-radius: 999px;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    font-size: 0.9rem;
    font-weight: 500;
}

.benefits {
    margin-top: 2rem;
    padding-left: 1.2rem;
}

.benefits li+li {
    margin-top: 0.8rem;
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;
    background: white;
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow: var(--shadow-sm);
    transition: var(--transition-default);
}

.close-btn:hover {
    transform: scale(1.08);
    background: var(--color-secondary);
    color: white;
}
</style>