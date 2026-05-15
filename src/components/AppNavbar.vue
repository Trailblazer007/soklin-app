<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import { Menu, X } from "lucide-vue-next";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <header :class="[
        'navbar',
        isScrolled && 'navbar-scrolled',
    ]">
        <div class="container navbar-container">
            <RouterLink to="/" class="logo">
                SoKlin
            </RouterLink>

            <nav class="nav-links">
                <RouterLink to="/" active-class="active-link">Home</RouterLink>
                <RouterLink to="/products" active-class="active-link">Products</RouterLink>
                <RouterLink to="/campaigns" active-class="active-link">Campaigns</RouterLink>
                <RouterLink to="/about" active-class="active-link">About</RouterLink>
                <RouterLink to="/contact" active-class="active-link">Contact</RouterLink>
            </nav>

            <button class="mobile-menu-button" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <Menu v-if="!isMobileMenuOpen" :size="28" />
                <X v-else :size="28" />
            </button>
        </div>

        <transition name="mobile-menu">
            <div v-if="isMobileMenuOpen" class="mobile-menu">
                <RouterLink to="/" @click="isMobileMenuOpen = false">
                    Home
                </RouterLink>

                <RouterLink to="/products" @click="isMobileMenuOpen = false">
                    Products
                </RouterLink>

                <RouterLink to="/campaigns" @click="isMobileMenuOpen = false">
                    Campaigns
                </RouterLink>

                <RouterLink to="/about" @click="isMobileMenuOpen = false">
                    About
                </RouterLink>

                <RouterLink to="/contact" @click="isMobileMenuOpen = false">
                    Contact
                </RouterLink>
            </div>
        </transition>
    </header>
</template>

<style scoped>
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: var(--transition-default);
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(14px);
}

.navbar-scrolled {
    border-bottom: 1px solid var(--color-border);
    box-shadow: var(--shadow-sm);
}

.navbar-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80px;
}

.logo {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
}

.active-link {
    color: var(--color-secondary);
}

.active-link::after {
    width: 100% !important;
}

.nav-links {
    display: flex;
    gap: 2rem;
}

.nav-links a {
    position: relative;
    font-weight: 500;
}

.nav-links a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: var(--color-secondary);
    transition: var(--transition-default);
}

.nav-links a:hover::after {
    width: 100%;
}

.mobile-menu-button {
    display: none;
    background: transparent;
}

.mobile-menu {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    background: white;
    border-bottom: 1px solid var(--color-border);
}

.mobile-menu a {
    font-weight: 600;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

@media (max-width: 968px) {
    .nav-links {
        display: none;
    }

    .mobile-menu-button {
        display: inline-flex;
    }
}
</style>