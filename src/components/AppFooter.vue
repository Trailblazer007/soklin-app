<script setup lang="ts">
</script>

<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-brand">
                <img src="/so-klin-logo.png" alt="SoKlin Logo" class="footer-logo" />

                <p class="footer-description">
                    A conceptual/speculative redesign project exploring a
                    modern digital experience for SoKlin.
                </p>

                <p class="footer-disclaimer">
                    This independent frontend project was created for
                    portfolio and educational purposes.
                </p>
            </div>

            <div class="footer-links">
                <h4>Socials</h4>

                <div class="social-links">
                    <a href="https://facebook.com/SoKlinNigeria" target="_blank">
                        Facebook
                    </a>

                    <a href="https://www.instagram.com/soklin.nigeria" target="_blank">
                        Instagram
                    </a>

                    <a href="https://www.tiktok.com/@soklinnigeria" target="_blank">
                        TikTok
                    </a>

                    <a href="https://www.youtube.com/@soklinnigeria" target="_blank">
                        YouTube
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container footer-bottom-content">
                <p>
                    © 2026 SoKlin Concept Experience
                </p>

                <p>
                    Built by Oluwaseun Fatoye
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    padding: 4rem 0;
    background: var(--color-surface);
    margin-top: 6rem;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}

.footer h3 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 1rem;
}

.footer p {
    max-width: 500px;
    line-height: 1.7;
    color: var(--color-text-light);
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.footer-disclaimer {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: var(--color-text-light);
}

.footer {
    margin-top: 6rem;
    background: #ffffff;
    border-top: 1px solid var(--color-border);
}

.footer-container {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 4rem;
    padding: 5rem 0;
}

.footer-logo {
    height: 72px;
    width: auto;
}

.footer-description {
    margin-top: 1.5rem;
    max-width: 520px;
    line-height: 1.8;
    color: var(--color-text-light);
}

.footer-disclaimer {
    margin-top: 1.5rem;
    color: var(--color-text-light);
    font-size: 0.95rem;
}

.footer-links h4 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.5rem;
}

.social-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.social-links a {
    color: var(--color-text-light);
    transition: var(--transition-default);
}

.social-links a:hover {
    color: var(--color-secondary);
    transform: translateX(4px);
}

.footer-bottom {
    border-top: 1px solid var(--color-border);
}

.footer-bottom-content {
    min-height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
}

.footer-bottom p {
    color: var(--color-text-light);
    font-size: 0.95rem;
}

@media (max-width: 968px) {
    .footer-container {
        grid-template-columns: 1fr;
    }

    .footer-bottom-content {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 1.5rem 0;
    }
}

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
    }
}
</style>