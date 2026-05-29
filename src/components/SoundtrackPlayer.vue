<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import {
    Play,
    Pause,
    Volume2,
    VolumeX,
} from "lucide-vue-next";

import soundtrack from "@/assets/audio/so-klin-audio.mp3";

const audio = new Audio(soundtrack);

const isPlaying = ref(false);

const volume = ref(0.5);

const isMuted = ref(false);

const togglePlayback = async () => {
    if (isPlaying.value) {
        audio.pause();

        isPlaying.value = false;
    } else {
        audio.volume = volume.value;

        await audio.play();

        isPlaying.value = true;
    }
};

const toggleMute = () => {
    isMuted.value = !isMuted.value;

    audio.muted = isMuted.value;
};

const updateVolume = () => {
    audio.volume = volume.value;
};

onMounted(() => {
    audio.volume = volume.value;

    audio.addEventListener("ended", () => {
        isPlaying.value = false;
    });
});

onUnmounted(() => {
    audio.pause();

    audio.currentTime = 0;
});
</script>

<template>
    <div class="soundtrack-player">
        <button class="player-btn" @click="togglePlayback" :aria-label="isPlaying
            ? 'Pause soundtrack'
            : 'Play soundtrack'
            ">
            <Pause v-if="isPlaying" :size="18" />

            <Play v-else :size="18" />
        </button>

        <div class="player-meta">
            <span class="player-label">
                SoKlin Fresh Soundtrack
            </span>

            <span class="player-status">
                {{ isPlaying ? "Now Playing" : "Sound Off" }}
            </span>
        </div>

        <div class="player-controls">
            <button class="mute-btn" @click="toggleMute" aria-label="Toggle soundtrack volume">
                <VolumeX v-if="isMuted" :size="18" />

                <Volume2 v-else :size="18" />
            </button>

            <input v-model="volume" type="range" min="0" max="1" step="0.01" @input="updateVolume" class="volume-slider"
                aria-label="Adjust soundtrack volume" />
        </div>
    </div>
</template>

<style scoped>
.soundtrack-player {
    position: fixed;

    right: 1.5rem;
    bottom: 1.5rem;

    z-index: 1500;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem 1.2rem;

    border-radius: 999px;

    background: rgba(255, 255, 255, 0.82);

    backdrop-filter: blur(14px);

    border: 1px solid rgba(255, 255, 255, 0.4);

    box-shadow: var(--shadow-md);
}

.player-btn,
.mute-btn {
    width: 42px;
    height: 42px;

    border-radius: 50%;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: var(--color-secondary);

    color: white;

    transition: var(--transition-default);
}

.player-btn:hover,
.mute-btn:hover {
    transform: scale(1.05);
}

.player-meta {
    display: flex;
    flex-direction: column;
}

.player-label {
    font-size: 0.92rem;
    font-weight: 700;
}

.player-status {
    font-size: 0.8rem;
    color: var(--color-text-light);
}

.player-controls {
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

.volume-slider {
    width: 90px;
    accent-color: var(--color-secondary);
}

@media (max-width: 768px) {
    .soundtrack-player {
        left: 50%;
        right: auto;

        bottom: 1rem;

        transform: translateX(-50%);

        width: calc(100% - 2rem);

        justify-content: space-between;
    }

    .volume-slider {
        width: 70px;
    }
}
</style>