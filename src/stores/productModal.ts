import { ref } from "vue";
import type { Product } from "@/types/product";

const selectedProduct = ref<Product | null>(null);
const isOpen = ref(false);

export const useProductModal = () => {
  const openModal = (product: Product) => {
    selectedProduct.value = product;
    isOpen.value = true;
  };

  const closeModal = () => {
    selectedProduct.value = null;
    isOpen.value = false;
  };

  return {
    selectedProduct,
    isOpen,
    openModal,
    closeModal,
  };
};