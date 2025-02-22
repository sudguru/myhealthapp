<template>

    <Head>
        <Title>Home Page: My Health App</Title>
        <Meta name="description" content="Home Page: My Health App" />
    </Head>
    <div class="mt-4 md:mt-6 px-6 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
            class="md:col-start-2 md:col-span-6 order-2 md:order-1 flex flex-col items-start justify-center gap-4">
            <h1 class="text-3xl md:text-5xl">Modern pharmacy management meets seamless
                healthcare
                delivery</h1>
            <h3 class="text-lg md:text-2xl">
                Transform Your Pharmacy Operations with Nepal's Smartest Healthcare Solution:
                <span class="text-black font-bold">POS and Stock Management with General
                    Accounting</span>
            </h3>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                <IndexHeroFeatures />
            </div>

        </div>
        <div class="md:col-span-4 order-1 md:order-2">
            <img src="/heroapp.webp" alt="My Health App" class="w-3/4 md:w-full mx-auto">
        </div>
    </div>
    <!-- <HorizontalScrollingCards /> -->
    <div class="px-6">
        <MainFeatures title="Empower Your Pharmacy with Smart Technology" description=""
            :features="FEATURES" />
    </div>
    <!--
    <CtaSection title="Start Your Digital Journey, Today"
        description="We are here to help you with your healthcare needs. Contact us today to learn more about our services and how we can help you."
        buttontext="Book a Demo" />
        -->
    <WhyUs />



</template>
<script setup lang="ts">
import FEATURES from '~/data/feature-data';

</script>
