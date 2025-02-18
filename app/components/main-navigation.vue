<script setup lang="ts">
const items = ref([
    {
        label: 'Pharmacy/Clinics',
        icon: 'i-solar-pills-3-outline',
        to: '/',
        active: true
    },
    {
        label: 'General Public',
        icon: 'i-solar-users-group-rounded-outline',
        to: '/public',
    },
    {
        label: 'Labs',
        icon: 'i-solar-test-tube-linear',
        to: '/labs',
    },
    {
        label: 'Delivery',
        icon: 'i-solar-walking-round-outline',
        to: '/delivery'
    },
    {
        label: 'Investors',
        icon: 'i-solar-hand-money-linear',
        to: '/investment',
    },
    {
        label: 'Contact Us',
        icon: 'i-lucide-phone-call',
        to: '/contact'
    }
])
</script>

<template>
    <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
