<template>
    <section class="text-center my-8">
        <h2 class="text-3xl font-bold mb-12 text-center">Our Amazing Features</h2>
        <div ref="scrollSection" class="scroll-section-outer">
            <div class="scroll-section-inner" ref="scrollContainer">
                <div class="flex flex-col items-center justify-center p-8">
                    <div class="flex gap-8 w-full mx-auto">
                        <div v-for="(card, index) in cards" :key="index"
                            class="gradient-card rounded-xl p-6 text-white shadow-xl min-w-full md:min-w-[500px]">
                            <h3 class="text-xl font-semibold mb-4">{{ card.title }}</h3>
                            <ul class="space-y-2">
                                <li v-for="(item, itemIndex) in card.items" :key="itemIndex"
                                    class="flex items-center">
                                    <span class="mr-2">•</span>
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const scrollSection = ref(null)
const scrollContainer = ref(null)

const cards = ref([
    {
        title: 'Feature 1',
        items: ['Advanced Analytics', 'Real-time Monitoring', 'Custom Reports']
    },
    {
        title: 'Feature 2',
        items: ['User Management', 'Role-based Access', 'Security Controls']
    },
    {
        title: 'Feature 3',
        items: ['Data Integration', 'API Access', 'Automated Sync', 'Automated Sync', 'Automated Sync']
    },
    {
        title: 'Feature 4',
        items: ['Cloud Storage', 'Backup Solutions', 'Data Recovery']
    },
    {
        title: 'Feature 5',
        items: ['Mobile Support', 'Cross-platform', 'Responsive Design']
    },
    {
        title: 'Feature 6',
        items: ['24/7 Support', 'Training Resources', 'Documentation']
    }
])

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: scrollSection.value,
            pin: true,
            start: 'top top',
            end: '+=200%',
            scrub: 2,
        }
    })

    timeline.to(scrollContainer.value, {
        x: () => -(scrollContainer.value.scrollWidth - window.innerWidth),
        ease: 'none',
    })
})

onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>