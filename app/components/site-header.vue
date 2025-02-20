<template>
    <div ref="topBarRef"
        class="bg-[var(--ui-primary)] text-white py-2 text-sm fixed top-0 left-0 w-full z-20 transition-transform duration-300"
        :class="[
            isInitialLoad ? 'translate-y-[-100%]' : '',
            !isTopBarVisible ? '-translate-y-full' : 'translate-y-0'
        ]">
        <div class="container mx-auto px-4">
            <NuxtLink to="/investment" class="hover:text-blue-200 ml-4">A Brief Inventment
                Opportunity
            </NuxtLink>
        </div>
    </div>

    <header ref="headerRef"
        class="bg-[var(--ui-lighter)] shadow-none py-4 fixed w-full z-10 transition-transform duration-300"
        :class="[
            isInitialLoad ? 'translate-y-[-100%]' : '',
            !isHeaderVisible ? '-translate-y-full' : 'translate-y-0'
        ]" :style="{ top: headerTopPosition }">
        <div class="container mx-auto flex items-center justify-between px-4">
            <NuxtLink to="/"><img src="/logo.webp" class="h-12 w-auto" alt="Website Logo">
            </NuxtLink>
            <div class="hidden lg:block">
                <MainNavigation />
            </div>
            <div class="lg:hidden">
                <MobileNavigation />
            </div>
        </div>
    </header>

    <div :style="{ height: `${totalHeaderHeight}px` }" />
</template>

<script setup>
import { MobileNavigation } from '#components'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Refs for DOM elements
const topBarRef = ref(null)
const headerRef = ref(null)

// State
const isInitialLoad = ref(true)
const isTopBarVisible = ref(true)
const isHeaderVisible = ref(true)
const topBarHeight = ref(0)
const headerHeight = ref(0)
const lastScrollPosition = ref(0)

// Computed values
const headerTopPosition = computed(() =>
    isTopBarVisible.value ? `${topBarHeight.value}px` : '0px'
)

const totalHeaderHeight = computed(() =>
    isTopBarVisible.value ? topBarHeight.value + headerHeight.value : headerHeight.value
)

// Constants
const SCROLL_TOLERANCE = 5
const SCROLL_THRESHOLD = 50

// Update dimensions
const updateDimensions = () => {
    if (topBarRef.value && headerRef.value) {
        topBarHeight.value = topBarRef.value.offsetHeight
        headerHeight.value = headerRef.value.offsetHeight
    }
}

// Scroll handler with debounce
let scrollTimeout
const handleScroll = () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
    }

    scrollTimeout = window.requestAnimationFrame(() => {
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        const scrollDelta = Math.abs(currentScrollPosition - lastScrollPosition.value)

        if (scrollDelta > SCROLL_TOLERANCE) {
            // Scrolling down
            if (currentScrollPosition > lastScrollPosition.value) {
                if (currentScrollPosition > SCROLL_THRESHOLD) {
                    isTopBarVisible.value = false
                    isHeaderVisible.value = false
                }
            }
            // Scrolling up
            else {
                isHeaderVisible.value = true
                if (currentScrollPosition <= topBarHeight.value) {
                    isTopBarVisible.value = true
                }
            }
        }

        lastScrollPosition.value = currentScrollPosition <= 0 ? 0 : currentScrollPosition
    })
}

// Resize handler with debounce
let resizeTimeout
const handleResize = () => {
    if (resizeTimeout) {
        window.cancelAnimationFrame(resizeTimeout)
    }

    resizeTimeout = window.requestAnimationFrame(updateDimensions)
}

// Lifecycle hooks
onMounted(() => {
    // Set initial positions
    updateDimensions()

    // Trigger initial animation
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            isInitialLoad.value = false
        })
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })
})

onBeforeUnmount(() => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
    }
    if (resizeTimeout) {
        window.cancelAnimationFrame(resizeTimeout)
    }
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.transition-transform {
    will-change: transform;
}
</style>