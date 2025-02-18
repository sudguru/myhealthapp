<template>
    <div id="top-bar"
        class="bg-[var(--ui-primary)] text-white py-2 text-sm fixed top-0 left-0 w-full z-20 transition-transform duration-300 transform translate-y-0">
        <div class="container mx-auto px-4">
            <a href="#" class="hover:text-blue-200">Link 1</a>
            <a href="#" class="hover:text-blue-200 ml-4">Link 2</a>
            <a href="#" class="hover:text-blue-200 ml-4">Link 3</a>
        </div>
    </div>
    <header id="site-header"
        class="bg-[var(--ui-lighter)] opacity-10 shadow-none py-4 fixed top-0 left-0 w-full z-10 transition-transform duration-300 transform translate-y-0">
        <div class="container mx-auto flex items-center justify-between px-4">

            <img src="/logo.webp" class="h-12 w-auto" alt="website Logo">
            <div class="hidden md:block">
                <MainNavigation />
            </div>
        </div>
    </header>
</template>
<script>
import { onMounted, onBeforeUnmount } from "vue"; // Import lifecycle hooks
import { ref } from "@vue/composition-api"; // Import ref

export default {
    setup() {
        // Using Composition API
        const topBarVisible = ref(true);
        const topBarHeight = ref(0);
        const headerHeight = ref(0);

        const updateHeaderTop = () => {
            const siteHeader = document.getElementById("site-header");
            if (siteHeader) {
                siteHeader.style.top = topBarVisible.value
                    ? `${topBarHeight.value}px`
                    : "0px";
            }
        };

        const adjustContentPadding = () => {
            const mainContent = document.getElementById("main-content");
            if (mainContent) {
                const totalHeaderHeight = topBarVisible.value
                    ? topBarHeight.value + headerHeight.value
                    : headerHeight.value;
                mainContent.style.paddingTop = `${totalHeaderHeight + 30}px`;
            }
            updateHeaderTop();
        };

        let lastScrollTop = 0;
        const tolerance = 5;

        const handleScroll = () => {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                if (
                    scrollTop > headerHeight.value + topBarHeight.value &&
                    Math.abs(scrollTop - lastScrollTop) > tolerance
                ) {
                    document
                        .getElementById("site-header")
                        ?.classList.remove("translate-y-0");
                    document
                        .getElementById("site-header")
                        ?.classList.add("-translate-y-full");
                }

                if (topBarVisible.value) {
                    topBarVisible.value = false; // using ref to update value
                    document
                        .getElementById("top-bar")
                        ?.classList.add("-translate-y-full");
                    document.getElementById("top-bar")?.classList.remove("translate-y-0"); //Important!
                    updateHeaderTop();
                    adjustContentPadding();
                }
            } else {
                // Scrolling up
                if (
                    scrollTop + window.innerHeight <
                    document.documentElement.scrollHeight
                ) {
                    if (Math.abs(scrollTop - lastScrollTop) > tolerance) {
                        document
                            .getElementById("site-header")
                            ?.classList.remove("-translate-y-full");
                        document
                            .getElementById("site-header")
                            ?.classList.add("translate-y-0");
                    }
                }

                if (scrollTop <= topBarHeight.value) {
                    topBarVisible.value = true;
                    document
                        .getElementById("top-bar")
                        ?.classList.remove("-translate-y-full");
                    document.getElementById("top-bar")?.classList.add("translate-y-0");
                    updateHeaderTop();
                    adjustContentPadding();
                }
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        const handleResize = () => {
            const topBarElement = document.getElementById("top-bar");
            const headerElement = document.getElementById("site-header");

            if (topBarElement && headerElement) {
                topBarHeight.value = topBarElement.offsetHeight;
                headerHeight.value = headerElement.offsetHeight;
                adjustContentPadding();
            }
        };

        // onMounted(() => {
        //     // Get initial heights only after the component is mounted
        //     const topBarElement = document.getElementById('top-bar');
        //     const headerElement = document.getElementById('site-header');

        //     if (topBarElement && headerElement) {
        //         topBarHeight.value = topBarElement.offsetHeight;
        //         headerHeight.value = headerElement.offsetHeight;
        //     }
        //     adjustContentPadding();

        //     window.addEventListener('scroll', handleScroll);
        //     window.addEventListener('resize', handleResize);
        // });

        onMounted(() => {
            // Get initial heights only after the component is mounted
            const topBarElement = document.getElementById("top-bar");
            const headerElement = document.getElementById("site-header");

            if (topBarElement && headerElement) {
                topBarHeight.value = topBarElement.offsetHeight;
                headerHeight.value = headerElement.offsetHeight;
            }
            adjustContentPadding();

            // Restore opacity after the initial positioning
            const siteHeader = document.getElementById("site-header");
            if (siteHeader) {
                siteHeader.style.opacity = "1";
                setTimeout(() => {
                    // Timeout to force re-rendering of the site-header for the transition to work.
                    siteHeader.style.transition = ""; // Restore transition
                }, 0);
            }

            const topBar = document.getElementById("top-bar");
            if (topBar) {
                topBar.style.transition = "";
            }

            window.addEventListener("scroll", handleScroll);
            window.addEventListener("resize", handleResize);
        });

        onBeforeUnmount(() => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        });

        return {
            topBarVisible,
            // Expose any other data or methods you need in your template
        };
    },
};
</script>
