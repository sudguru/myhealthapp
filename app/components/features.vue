<script setup>
import FEATURES from '~/data/feature-data';
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
    <div class="my-10 py-10 bg-[var(--ui-light)] text-gray-800">
        <h1 class="text-3xl md:text-5xl mb-10 px-4 text-center">Empower Your Pharmacy
            with
            Smart Technology</h1>

        <div id="scrollArea" class="scroll-container">
            <div class="cards-wrapper">
                <div v-for="feature in FEATURES" :key="feature.title"
                    class="card gradient-card  rounded-lg shadow-md p-4">
                    <h3>{{ feature.title }}</h3>
                    <div v-for="child in feature.children" :key="child[0]">
                        <p>{{ child }}</p>
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

.cards-wrapper {
    display: flex;
    gap: 20px;
    padding-right: 20px;
    /* Ensure last card has spacing */
}

.card {
    flex: 0 0 450px;
    /* Don't allow cards to shrink or grow */
    height: 350px;
    transition: transform 0.2s;
}

/* Hide scrollbar but keep functionality */
.scroll-container::-webkit-scrollbar {
    display: none;
}

.scroll-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.gradient-card {
    @apply relative overflow-hidden transition-all duration-300;
    background: linear-gradient(135deg, #9780d6 0%, #c69daf 100%);
}

.gradient-card:hover {
    background: linear-gradient(135deg, #c69daf 0%, #9780d6 100%);
}
</style>