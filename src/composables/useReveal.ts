import { useMotion } from "@vueuse/motion";
import type { Ref } from "vue";

export const useReveal = (
  target: Ref<HTMLElement | null>,
  delay = 0
) => {
  useMotion(target, {
    initial: {
      opacity: 0,
      y: 40,
    },

    visibleOnce: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 600,
        delay,
      },
    },
  });
};