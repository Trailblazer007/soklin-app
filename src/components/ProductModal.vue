<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useProductModal } from "@/stores/productModal";

const { selectedProduct, isOpen, closeModal } = useProductModal();

const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
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
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="closeModal">×</button>

            <img :src="selectedProduct?.image" class="modal-image" />

            <h2>{{ selectedProduct?.name }}</h2>

            <p class="category">
                {{ selectedProduct?.category }}
            </p>

            <p class="description">
                {{ selectedProduct?.description }}
            </p>

            <div class="sizes">
                <span v-for="size in selectedProduct?.sizes" :key="size">
                    {{ size }}
                </span>
            </div>

            <ul class="benefits">
                <li v-for="b in selectedProduct?.benefits" :key="b">
                    {{ b }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal-content {
    background: white;
    padding: 2rem;
    width: min(600px, 90%);
    border-radius: 12px;
    position: relative;
}

.modal-image {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
}
</style>