<template>
    <section class="section social-section">
        <div class="container">
            <div class="social-header">
                <h2 class="section-title">
                    Join The SoKlin Community
                </h2>

                <p class="section-subtitle">
                    Follow campaigns, community moments,
                    challenges, and fresh experiences
                    across social platforms.
                </p>
            </div>

            <div class="social-grid">
                <a href="https://instagram.com/soklin.nigeria" target="_blank" class="social-card">
                    <span>Instagram</span>
                    <h3>10.5K+ Followers</h3>
                    <p>
                        Fresh moments, campaign highlights,
                        laundry tips, and community engagement.
                    </p>
                </a>

                <a href="https://facebook.com/SoKlinNigeria" target="_blank" class="social-card">
                    <span>Facebook</span>
                    <h3>570K+ Followers</h3>
                    <p>
                        Fresh moments, campaign highlights,
                        laundry tips, and community engagement.
                    </p>
                </a>

                <a href="https://tiktok.com/@soklinnigeria" target="_blank" class="social-card">
                    <span>TikTok</span>
                    <h3>12.8K+ Followers</h3>
                    <p>
                        Fresh moments, campaign highlights,
                        laundry tips, and community engagement.
                    </p>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
.social-section {
    background: var(--color-surface);
}

.social-header {
    text-align: center;
}

.social-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 4rem;
}

.social-card {
    padding: 2rem;
    border-radius: var(--radius-lg);
    background: white;
    border: 1px solid var(--color-border);
    transition: var(--transition-default);
}

.social-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
}

.social-card span {
    color: var(--color-secondary);
    font-weight: 600;
}

.social-card h3 {
    margin-top: 1rem;
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
}

.social-card p {
    margin-top: 1rem;
    line-height: 1.7;
    color: var(--color-text-light);
}

@media (max-width: 768px) {
    .social-grid {
        grid-template-columns: 1fr;
    }
}
</style>