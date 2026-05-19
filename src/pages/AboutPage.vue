<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
    <MainLayout>
        <section class="about-hero section">
            <div class="container">
                <span class="section-tag">
                    About SoKlin
                </span>

                <h1 class="hero-title">
                    Freshness Trusted Across Generations
                </h1>

                <p class="hero-description">
                    For decades, SoKlin has remained part of everyday life
                    in Nigerian homes — delivering brighter washes,
                    long-lasting freshness, and detergent solutions built
                    for modern lifestyles.
                </p>
            </div>
        </section>

        <!-- BRAND STORY -->
        <section class="section">
            <div class="container story-grid">
                <div>
                    <span class="section-tag">
                        Our Story
                    </span>

                    <h2 class="section-title">
                        Built Around Everyday Nigerian Living
                    </h2>
                </div>

                <div class="story-content">
                    <p>
                        From hand washing routines to modern washing machine care,
                        SoKlin has evolved alongside generations of families
                        looking for detergents that combine performance,
                        fragrance, affordability, and fabric care.
                    </p>

                    <p>
                        Over the years, the brand has expanded beyond
                        traditional detergent powders into liquid detergents,
                        machine-optimized cleaning solutions, odour defence,
                        and freshness-focused innovations tailored to modern homes.
                    </p>

                    <p>
                        Today, SoKlin continues to connect with consumers
                        through community-driven campaigns, social experiences,
                        digital storytelling, and everyday freshness moments.
                    </p>
                </div>
            </div>
        </section>

        <!-- PRODUCT EVOLUTION -->
        <section class="section evolution-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">
                        Innovation
                    </span>

                    <h2 class="section-title">
                        Evolving With Modern Laundry Needs
                    </h2>
                </div>

                <div class="evolution-grid">
                    <div class="evolution-card">
                        <h3>Classic Powder Detergents</h3>

                        <p>
                            Trusted concentrated powders designed for
                            brighter whites, stain removal, and everyday cleaning.
                        </p>
                    </div>

                    <div class="evolution-card">
                        <h3>Machine Care Solutions</h3>

                        <p>
                            SoKlin Matic introduced detergent solutions
                            optimized for both front-load and top-load washing machines.
                        </p>
                    </div>

                    <div class="evolution-card">
                        <h3>Liquid Detergent Innovation</h3>

                        <p>
                            Smart Liquid variants expanded the SoKlin ecosystem
                            into fast-dissolving liquid cleaning experiences.
                        </p>
                    </div>

                    <div class="evolution-card">
                        <h3>Freshness & Odour Defence</h3>

                        <p>
                            Modern variants now focus on fragrance retention,
                            antibacterial care, and urban indoor drying challenges.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- COMMUNITY -->
        <section class="section community-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">
                        Community
                    </span>

                    <h2 class="section-title">
                        More Than Just Laundry
                    </h2>

                    <p class="section-subtitle">
                        Through activations, challenges, and social experiences,
                        SoKlin continues to build memorable connections with
                        communities across Nigeria.
                    </p>
                </div>

                <div class="community-highlight">
                    <h3>SoKlin Experience</h3>

                    <p>
                        Interactive experiences featuring music, games,
                        comedy, dance, giveaways, and youth-focused activities
                        designed to celebrate confidence, freshness, and community energy.
                    </p>
                </div>
            </div>
        </section>

        <!-- SOCIAL PROOF -->
        <section class="section social-proof-section">
            <div class="container">
                <div class="section-header">
                    <span class="section-tag">
                        Social Presence
                    </span>

                    <h2 class="section-title">
                        A Community That Keeps Growing
                    </h2>
                </div>

                <div class="social-stats">
                    <div class="stat-card">
                        <h3>570K+</h3>
                        <p>Facebook Followers</p>
                    </div>

                    <div class="stat-card">
                        <h3>10K+</h3>
                        <p>Instagram Community</p>
                    </div>

                    <div class="stat-card">
                        <h3>12K+</h3>
                        <p>TikTok Followers</p>
                    </div>

                    <div class="stat-card">
                        <h3>1K+</h3>
                        <p>YouTube Subscribers</p>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
.hero-title {
    margin-top: 1rem;
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 1.05;
    font-family: "Poppins", sans-serif;
    max-width: 900px;
}

.hero-description {
    margin-top: 2rem;
    max-width: 760px;
    line-height: 1.9;
    font-size: 1.1rem;
    color: var(--color-text-light);
}

.story-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 5rem;
    align-items: start;
}

.story-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.story-content p {
    line-height: 1.9;
    color: var(--color-text-light);
}

.evolution-section {
    background: var(--color-surface);
}

.evolution-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

.evolution-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
    cursor: pointer;
}

.evolution-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.evolution-card h3 {
    font-family: "Poppins", sans-serif;
}

.evolution-card p {
    margin-top: 1rem;
    line-height: 1.8;
    color: var(--color-text-light);
}

.community-highlight {
    margin-top: 4rem;
    background: white;
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: 3rem;
}

.community-highlight h3 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
}

.community-highlight p {
    margin-top: 1.5rem;
    line-height: 1.9;
    color: var(--color-text-light);
    max-width: 800px;
}

.social-stats {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.stat-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: white;
    border: 1px solid var(--color-border);
    text-align: center;
    transition: var(--transition-default);
    cursor: pointer;
}

.stat-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.stat-card h3 {
    font-size: 2rem;
    font-family: "Poppins", sans-serif;
    color: var(--color-secondary);
}

.stat-card p {
    margin-top: 0.8rem;
    color: var(--color-text-light);
}

@media (max-width: 968px) {

    .story-grid,
    .evolution-grid,
    .social-stats {
        grid-template-columns: 1fr;
    }

    .hero-title {
        font-size: 3rem;
    }
}
</style>