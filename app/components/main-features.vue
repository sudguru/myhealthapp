<script setup>


defineProps({
    title: {
        type: String,
        default: "Your Awesome Title Here",
    },
    description: {
        type: String,
        default: "",
    },
    features: {
        type: Array,
        default: () => []
    }
});


onMounted(() => {
    const scrollArea = document.getElementById('scrollArea');

    scrollArea.addEventListener('wheel', (e) => {
        const maxScroll = scrollArea.scrollWidth - scrollArea.clientWidth;

        // Only prevent default and handle horizontal scroll if:
        // 1. Scrolling right and not at the end, or
        // 2. Scrolling left and not at the beginning
        if ((e.deltaY > 0 && scrollArea.scrollLeft < maxScroll) ||
            (e.deltaY < 0 && scrollArea.scrollLeft > 0)) {
            e.preventDefault();
            scrollArea.scrollLeft += (e.deltaY * 0.5);
        }
        // Otherwise let the normal vertical scroll happen
    }, { passive: false });

    nextTick(() => {
        const card = document.querySelector('.card');
        if (card) {
            const cardWidth = card.offsetWidth;
            scrollArea.style.paddingLeft = `${cardWidth * 0.5}px`;
        }
    });
});
</script>

<template>
    <div class="my-14 py-8 text-gray-800">
        <h1 class="text-3xl md:text-5xl mb-18 px-4 text-center">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
        <div id="scrollArea" class="scroll-container">
            <div class="flex gap-6">
                <div v-for="feature in features" :key="feature.title"
                    class="gradient-card relative flex-none w-full h-[500px] md:w-[700px] md:h-[350px] transition-transform duration-[0.8s]  rounded-lg shadow-lg p-6 md:p-10">
                    <h2 class="text-xl md:text-2xl font-semibold mb-4 md:mb-7 text-violet-950">{{
                        feature.title
                        }}</h2>
                    <img :src="feature.image"
                        class="absolute bottom-3 right-3 w-60 h-auto md:max-w-none"
                        alt="{{ feature.title }}">
                    <div v-for="child in feature.children" :key="child[0]" class="pl-3 md:pl-6">
                        <p class="flex items-start mb-2 text-gray-900 text-xl">
                            <UIcon name="solar:adhesive-plaster-line-duotone"
                                class="size-5 mr-3 mt-2" />
                            {{ child }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scroll-container {
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
}



.card {
    flex: 0 0 700px;
    /* Don't allow cards to shrink or grow */
    height: 350px;
    transition: transform 0.8s;
}

/* Hide scrollbar but keep functionality */
.scroll-container::-webkit-scrollbar {
    display: none;
}

.scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>