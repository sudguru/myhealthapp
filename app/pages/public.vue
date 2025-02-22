<script setup>
import FEATURES from '~/data/feature-data-public';
</script>
<template>

    <Head>
        <Title>Your Health Your Way: My Health App</Title>
        <Meta name="description" content="Your Health Your Way: My Health App" />
    </Head>
    <div class="mt-4 md:mt-6 px-6 md:px-0 container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div
            class="md:col-start-2 md:col-span-6 order-2 md:order-1 flex flex-col items-start justify-center gap-4">
            <h1 class="text-3xl md:text-5xl">Your Health, Your Way!</h1>
            <h3 class="text-lg md:text-2xl">
                Experience healthcare that revolves around you. MyHealthApp brings Nepal's trusted
                pharmacies, healthcare services, and medical expertise right to your fingertips.
            </h3>


        </div>
        <div class="md:col-span-4 order-1 md:order-2">
            <img src="/your-health.webp" alt="My Health App" class="w-full">
        </div>
    </div>

    <div class="px-6">
        <MainFeatures
            title="Take control of your healthcare journey with a platform that understands your needs"
            :features="FEATURES" />
    </div>
    <div class="prose max-w-5xl mx-auto px-6">
        <h1>Highlights</h1>

        Medicine Finder
        "Find any medicine in your neighborhood. Check availability, compare prices, and order
        directly from trusted local pharmacies."
        Digital Health Records
        "Your health history in one secure place. Access your prescriptions, lab reports, and
        medical records anytime, anywhere."
        Healthcare Services
        "Book appointments, schedule home care, or arrange lab tests. Professional healthcare
        support when you need it."
        Smart Reminders
        "Never miss your medications. Get timely reminders for refills and appointments to stay on
        top of your health."

        Community Impact
        "Join thousands of Nepalis who are discovering a simpler way to manage their health. From
        busy professionals to families caring for elderly parents, MyHealthApp makes healthcare
        accessible to everyone."
    </div>
</template>