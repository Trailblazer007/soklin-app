<script setup lang="ts">
import {
    Facebook,
    Instagram,
    Youtube,
    Github,
} from "lucide-vue-next";
</script>

<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-brand">
                <img src="/so-klin-logo.png" alt="SoKlin Logo" class="footer-logo" />

                <p class="footer-description">
                    A conceptual frontend redesign exploring a modern,
                    community-driven digital experience for SoKlin.
                </p>

                <p class="footer-disclaimer">
                    Independent portfolio project created for educational
                    and showcase purposes.
                </p>
            </div>

            <div class="footer-socials">
                <h4>Connect With SoKlin</h4>

                <div class="social-icons">
                    <a href="https://facebook.com/SoKlinNigeria" target="_blank" aria-label="Facebook" class="facebook">
                        <Facebook :size="22" />
                    </a>

                    <a href="https://www.instagram.com/soklin.nigeria" target="_blank" aria-label="Instagram"
                        class="instagram">
                        <Instagram :size="22" />
                    </a>

                    <a href="https://www.tiktok.com/@soklinnigeria" target="_blank" aria-label="TikTok" class="tiktok">
                        ♪
                    </a>

                    <a href="https://www.youtube.com/@soklinnigeria" target="_blank" aria-label="YouTube"
                        class="youtube">
                        <Youtube :size="22" />
                    </a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container footer-bottom-content">
                <p>
                    © 2026 SoKlin Concept Experience
                </p>

                <a href="https://github.com/trailblazer007" target="_blank" class="creator-link">
                    <Github :size="16" />

                    <span>
                        Built by Oluwaseun Fatoye
                    </span>
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    margin-top: 6rem;
    background: #ffffff;
    border-top: 1px solid var(--color-border);
}

.footer-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    padding: 5rem 0;
}

.footer-brand {
    max-width: 560px;
}

.footer-logo {
    height: 72px;
    width: auto;
}

.footer-description {
    margin-top: 1.5rem;
    line-height: 1.9;
    color: var(--color-text-light);
}

.footer-disclaimer {
    margin-top: 1rem;
    font-size: 0.95rem;
    color: var(--color-text-light);
}

.footer-socials h4 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 1.5rem;
}

.social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.social-icons a {
    width: 52px;
    height: 52px;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color-surface);

    color: #555;

    transition: all 0.25s ease;
}

.social-icons a:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: var(--shadow-md);
}

.facebook:hover {
    background: #1877f2;
    color: white;
}

.instagram:hover {
    background: linear-gradient(135deg,
            #f58529,
            #dd2a7b,
            #8134af,
            #515bd4);

    color: white;
}

.tiktok {
    font-size: 1.2rem;
    font-weight: 700;
}

.tiktok:hover {
    background: #000;
    color: white;
}

.youtube:hover {
    background: #ff0000;
    color: white;
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

.creator-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: var(--color-text-light);

    transition: var(--transition-default);
}

.creator-link:hover {
    color: var(--color-secondary);
    transform: translateY(-1px);
}

@media (max-width: 968px) {
    .footer-container {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-bottom-content {
        flex-direction: column;
        justify-content: center;

        text-align: center;

        padding: 1.5rem 0;
    }
}
</style>