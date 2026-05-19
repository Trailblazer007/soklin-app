<script setup lang="ts">
import {
    ref,
    onMounted,
    onUnmounted,
} from "vue"; import { RouterLink } from "vue-router";
import { Menu, X } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { watch } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const mobileMenuRef = ref<HTMLElement | null>(
    null
);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

const handleOutsideClick = (
    event: MouseEvent
) => {
    const target = event.target as Node;

    if (
        isMobileMenuOpen.value &&
        mobileMenuRef.value &&
        !mobileMenuRef.value.contains(target)
    ) {
        isMobileMenuOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);

    document.addEventListener(
        "click",
        handleOutsideClick
    );
});

onUnmounted(() => {
    window.removeEventListener(
        "scroll",
        handleScroll
    );

    document.removeEventListener(
        "click",
        handleOutsideClick
    );
});

const route = useRoute();

watch(
    () => route.path,
    () => {
        isMobileMenuOpen.value = false;
    }
);
</script>

<template>
    <header :class="[
        'navbar',
        isScrolled && 'navbar-scrolled',
    ]">
        <div class="container navbar-container">
            <RouterLink to="/" class="logo">
                <img src="/so-klin-logo.png" alt="SoKlin" class="logo-image" />
            </RouterLink>

            <nav class="nav-links">
                <RouterLink to="/" active-class="active-link">Home</RouterLink>
                <RouterLink to="/products" active-class="active-link">Products</RouterLink>
                <RouterLink to="/campaigns" active-class="active-link">Campaigns</RouterLink>
                <RouterLink to="/about" active-class="active-link">About</RouterLink>
                <RouterLink to="/contact" active-class="active-link">Contact</RouterLink>
            </nav>

            <button class="mobile-menu-button" @click.stop="isMobileMenuOpen = !isMobileMenuOpen">
                <Menu v-if="!isMobileMenuOpen" :size="28" />
                <X v-else :size="28" />
            </button>
        </div>

        <transition name="mobile-menu">
            <div v-if="isMobileMenuOpen" ref="mobileMenuRef" class="mobile-menu">
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
.logo-image {
    height: 225px;
    width: auto;
    object-fit: contain;
    display: block;
}

.logo {
    display: flex;
    align-items: center;
    transition: var(--transition-default);
}

.logo:hover {
    opacity: 0.8;
    transform: scale(1.02);
}

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.65);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all 0.35s ease;
}

.navbar-scrolled {
    background: rgba(255, 255, 255, 0.85);
    border-bottom: 1px solid var(--color-border);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
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
    font-weight: 600;
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
    height: 3px;
    background: var(--color-secondary);
    transition: var(--transition-default);
}

.nav-links a:hover {
    color: var(--color-secondary);
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
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.mobile-menu a {
    font-weight: 600;
}

.mobile-menu a:hover {
    color: var(--color-secondary);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: transform 0.35s ease, opacity 0.25s ease;
}

.mobile-menu-enter-from {
    transform: translateY(-12px);
    opacity: 0;
}

.mobile-menu-leave-to {
    transform: translateY(-12px);
    opacity: 0;
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