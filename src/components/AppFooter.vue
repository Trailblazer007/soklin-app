<script setup lang="ts">
</script>

<template>
    <footer class="footer">
        <div class="container footer-container">
            <div>
                <h3>SoKlin Web Experience</h3>

                <p>
                    A conceptual/speculative redesign project exploring a
                    modern digital experience for SoKlin.
                </p>

                <p class="footer-disclaimer">
                    This is an independent conceptual frontend project
                    created for portfolio and educational purposes.
                </p>
            </div>

            <div class="footer-links">
                <a href="#">Instagram</a>
                <a href="#">TikTok</a>
                <a href="#">Facebook</a>
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

@media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
    }
}
</style>