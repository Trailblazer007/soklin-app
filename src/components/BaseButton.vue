<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps<{
    label: string;
    variant?: "primary" | "secondary";
    to?: string;
}>();
</script>

<template>
    <RouterLink v-if="to" :to="to" :class="[
        'base-button',
        variant === 'secondary'
            ? 'base-button-secondary'
            : 'base-button-primary',
    ]">
        {{ label }}
    </RouterLink>

    <button v-else :class="[
        'base-button',
        variant === 'secondary'
            ? 'base-button-secondary'
            : 'base-button-primary',
    ]">
        {{ label }}
    </button>
</template>

<style scoped>
.base-button {
    position: relative;
    overflow: hidden;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
    transform: translateY(0);
}

.base-button:active {
    transform: scale(0.98);
}

.base-button:hover {
    transform: translateY(-3px);
}

.base-button-primary {
    background: var(--color-primary);
    color: var(--color-text);
}

.base-button-primary:hover {
    background: var(--color-primary-dark);
    box-shadow: var(--shadow-md);
}

.base-button-secondary {
    background: var(--color-secondary);
    color: white;
}

.base-button-secondary:hover {
    background: var(--color-secondary-dark);
    box-shadow: var(--shadow-md);
}
</style>