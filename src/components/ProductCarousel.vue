<script setup lang="ts">
import { ref } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import { Swiper, SwiperSlide } from "swiper/vue";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/data/products";

const prevEl = ref(null);
const nextEl = ref(null);

const onSwiperInit = (swiper: SwiperType) => {
    setTimeout(() => {
        const navigation = swiper.params.navigation;

        if (
            navigation &&
            typeof navigation !== "boolean"
        ) {
            navigation.prevEl = prevEl.value;
            navigation.nextEl = nextEl.value;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        }
    });
};
</script>

<template>
    <section class="section">
        <div class="container carousel-wrapper">
            <div class="carousel-header">
                <div>
                    <h2 class="section-title">Explore Our Products</h2>
                    <p class="section-subtitle">
                        A curated range of SoKlin detergents designed for every wash need.
                    </p>
                </div>
            </div>

            <button ref="prevEl" class="carousel-arrow left" aria-label="Previous product">
                <ChevronLeft :size="26" />
            </button>

            <button ref="nextEl" class="carousel-arrow right" aria-label="Next product">
                <ChevronRight :size="26" />
            </button>

            <Swiper :modules="[Autoplay, Pagination, Navigation]" :slides-per-view="1" :space-between="20"
                :autoplay="{ delay: 3000 }" :pagination="{ clickable: true }" :breakpoints="{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }" @swiper="onSwiperInit" class="product-swiper">
                <SwiperSlide v-for="product in products" :key="product.id">
                    <ProductCard :product="product" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style scoped>
.carousel-wrapper {
    position: relative;
}

.carousel-header {
    display: flex;
    justify-content: center;
    text-align: center;
}

.carousel-header .section-subtitle {
    max-width: 600px;
    margin: 1rem auto 0;
}

.carousel-controls {
    display: flex;
    gap: 1rem;
}

.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    transition: var(--transition-default);
    box-shadow: var(--shadow-sm);
    backdrop-filter: blur(6px);
}

.carousel-arrow:hover {
    background: var(--color-secondary);
    color: white;
    transform: translateY(-50%) scale(1.08);
}

.carousel-arrow.left {
    left: -10px;
}

.carousel-arrow.right {
    right: -10px;
}

.nav-btn {
    padding: 0.7rem 1.2rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: white;
    cursor: pointer;
    transition: var(--transition-default);
    font-weight: 600;
}

.nav-btn:hover {
    background: var(--color-secondary);
    color: white;
    transform: translateY(-2px);
}

.product-swiper {
    margin-top: 3rem;
    padding-bottom: 3rem;
}

.swiper-pagination {
    margin-top: 1rem;
}

@media (max-width: 640px) {
    .carousel-arrow {
        display: none;
    }
}
</style>