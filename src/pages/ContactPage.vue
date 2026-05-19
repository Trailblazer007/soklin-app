<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue";
</script>

<template>
    <MainLayout>
        <!-- HERO -->
        <section class="section">
            <div class="container">
                <span class="section-tag">
                    Contact & Community
                </span>

                <h1 class="section-title">
                    Let’s Stay Connected
                </h1>

                <p class="section-subtitle">
                    SoKlin connects with millions of households through
                    social platforms, retail partners, and community experiences.
                </p>
            </div>
        </section>

        <!-- SOCIAL ECOSYSTEM -->
        <section class="section social-section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Social Ecosystem
                    </h2>

                    <p class="section-subtitle">
                        Follow SoKlin across platforms for campaigns, updates, and freshness moments.
                    </p>
                </div>

                <div class="social-grid">
                    <a href="https://facebook.com/SoKlinNigeria" target="_blank" class="social-card">
                        <h3>Facebook</h3>
                        <p>570K+ followers</p>
                    </a>

                    <a href="https://www.instagram.com/soklin.nigeria" target="_blank" class="social-card">
                        <h3>Instagram</h3>
                        <p>Campaign visuals & lifestyle content</p>
                    </a>

                    <a href="https://www.tiktok.com/@soklinnigeria" target="_blank" class="social-card">
                        <h3>TikTok</h3>
                        <p>Challenges & viral moments</p>
                    </a>

                    <a href="https://www.youtube.com/@soklinnigeria" target="_blank" class="social-card">
                        <h3>YouTube</h3>
                        <p>Campaign videos & experiences</p>
                    </a>
                </div>
            </div>
        </section>

        <!-- RETAIL PRESENCE -->
        <section class="section">
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">
                        Where to Buy SoKlin
                    </h2>

                    <p class="section-subtitle">
                        Available across major retail and online platforms in Nigeria.
                    </p>
                </div>

                <div class="retail-grid">
                    <div class="retail-card">
                        <h3>Online Stores</h3>
                        <p>Supermart, Addide, and other e-commerce platforms</p>
                    </div>

                    <div class="retail-card">
                        <h3>Supermarkets</h3>
                        <p>Nationwide retail distribution across major chains</p>
                    </div>

                    <div class="retail-card">
                        <h3>Local Stores</h3>
                        <p>Available in neighborhood retail outlets</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- EMAIL CONTACT -->
        <section class="section contact-section">
            <div class="container">
                <div class="contact-card">
                    <h2>Business Inquiries</h2>

                    <p>
                        For partnerships, campaigns, and collaborations:
                    </p>

                    <a href="mailto:officialsoklinnigeria@gmail.com" class="email">
                        officialsoklinnigeria@gmail.com
                    </a>
                </div>
            </div>
        </section>

        <!-- DISCLAIMER -->
        <section class="section">
            <div class="container disclaimer">
                <p>
                    This is an independent conceptual frontend project created for
                    portfolio and educational purposes.
                </p>
            </div>
        </section>
    </MainLayout>
</template>

<style scoped>
.social-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.social-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
    background: white;
    transition: var(--transition-default);
    text-decoration: none;
    color: inherit;
}

.social-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.social-card h3 {
    font-family: "Poppins", sans-serif;
}

.social-card p {
    margin-top: 0.5rem;
    color: var(--color-text-light);
}

.retail-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.retail-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
}

.retail-card h3 {
    font-family: "Poppins", sans-serif;
}

.retail-card p {
    margin-top: 1rem;
    color: var(--color-text-light);
    line-height: 1.7;
}

.contact-section {
    background: var(--color-surface);
}

.contact-card {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border);
}

.contact-card h2 {
    font-family: "Poppins", sans-serif;
}

.contact-card .email {
    display: inline-block;
    margin-top: 1.5rem;
    font-size: 1.2rem;
    color: var(--color-secondary);
    font-weight: 600;
}

.disclaimer {
    text-align: center;
    color: var(--color-text-light);
    font-size: 0.95rem;
}

@media (max-width: 968px) {

    .social-grid,
    .retail-grid {
        grid-template-columns: 1fr;
    }
}
</style>