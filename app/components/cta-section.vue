<template>
    <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
        <!-- Parallax Background Image -->
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" :style="{
            backgroundImage: `url(${backgroundimage})`,
            backgroundAttachment: 'fixed',
        }" />

        <!-- Overlay for better text readability -->
        <!-- <div class="absolute inset-0 bg-black bg-opacity-50" /> -->

        <!-- CTA Content -->

        <div class="relative z-10 text-center text-white px-4">
            <h1 class="text-5xl font-bold mb-6">{{ title }}</h1>
            <p class="text-xl mb-8">{{ description }}</p>


            <UButtonGroup>
                <UInput v-model="email" placeholder="Enter your email" :ui="{
                    base: 'bg-white border-3 border-gray-700 rounded-lg py-4 px-6 text-lg'
                }" />

                <UButton variant="solid" color="primary"
                    :ui="{ base: 'border-3 border-l-0 border-gray-700 rounded-lg px-4 text-lg' }">
                    {{ buttontext }}
                </UButton>
            </UButtonGroup>
        </div>
    </section>
</template>

<script setup>
// Props for dynamic content
defineProps({
    title: {
        type: String,
        default: "Your Awesome Title Here",
    },
    description: {
        type: String,
        default: "This is a compelling description for your CTA section.",
    },
    buttontext: {
        type: String,
        default: "Get Started",
    },
    backgroundimage: {
        type: String,
        default: "para.webp", // Replace with your image URL
    },
});
</script>

<style scoped>
/* Add custom CSS for smoother parallax effect */
.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
<!-- <template>
    <div class="bg-cover bg-center h-96 my-12"
        style="background-image:linear-gradient(rgba(151, 128, 214, 1), rgba(151, 128, 214, 0.3)), url(/long-pharmacy.webp); ">

        <div class="container mx-auto flex flex-col items-center justify-center text-center h-full">
            <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4">Start Your Digital
                Journey,
                <br>Today
            </h1>
            
        </div>
    </div>
</template>

<script setup lang="ts">
const email = ref('')
</script> -->