<template>
    <USlideover v-model:open="isOpen" side="left" title="MENU">
        <UButton icon="i-solar-list-down-minimalistic-outline" size="xl" color="primary"
            variant="solid" />
        <template #body>
            <div class="h-full">
                <ul class="flex flex-col gap-1">
                    <li v-for="item in MENUDATA" :key="item.label">
                        <NuxtLink :to="item.to" class="text-xl block px-4 py-2 hover:bg-gray-100"
                            :class="{ 'text-purple-400': item.active, 'text-gray-600': !item.active }"
                            @click="handleClick(item)">
                            {{ item.label }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </template>
    </USlideover>
</template>

<script setup lang="ts">
import MENUDATA from '~/data/menu-data';
const isOpen = ref(false)
// const selected = ref(0)

function handleClick(item: MenuItem) {
    MENUDATA.forEach((item) => item.active = false)
    item.active = !item.active
    isOpen.value = false;
}

interface MenuItem {
    label: string;
    icon: string;
    to: string;
    active: boolean;
}
</script>