<script setup lang="ts">
import MenuData from '~/data/menu-data'
const items = ref(MenuData)
</script>

<template>
    <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
