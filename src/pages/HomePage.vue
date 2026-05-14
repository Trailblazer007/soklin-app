<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";

import HeroSection from "@/sections/HeroSection.vue";
import TrustSection from "@/sections/TrustSection.vue";
import ProductsSection from "@/sections/ProductsSection.vue";
import ProductFinderSection from "@/sections/ProductFinderSection.vue";
import CampaignsSection from "@/sections/CampaignsSection.vue";
import SocialCommunitySection from "@/sections/SocialCommunitySection.vue";
import RetailPartnersSection from "@/sections/RetailPartnersSection.vue";
</script>

<template>
    <MainLayout>
        <HeroSection />

        <TrustSection />

        <ProductsSection />

        <ProductFinderSection />

        <CampaignsSection />

        <SocialCommunitySection />

        <RetailPartnersSection />
    </MainLayout>
</template>