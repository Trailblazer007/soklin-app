import { defineStore } from "pinia";
import { ref } from "vue";

type Campaign = {
    title: string;
    description: string;
    image: string;
};

export const useCampaignModal = defineStore("campaignModal", () => {
    const isOpen = ref(false);
    const selectedCampaign = ref<Campaign | null>(null);

    const openModal = (campaign: Campaign) => {
        selectedCampaign.value = campaign;
        isOpen.value = true;
    };

    const closeModal = () => {
        isOpen.value = false;
        selectedCampaign.value = null;
    };

    return {
        isOpen,
        selectedCampaign,
        openModal,
        closeModal,
    };
});