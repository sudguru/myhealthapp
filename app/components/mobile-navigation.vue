<template>
    <USlideover v-model="isOpen" side="left" title="MENU">
        <UButton icon="i-solar-list-down-minimalistic-outline" size="xl" color="primary"
            variant="solid" />
        <template #body>
            <div class="h-full">
                <UNavigationMenu orientation="vertical" :items="MENUDATA" class="w-full" :ui="{    // Increases vertical gap
                    link: 'text-xl mb-1'  // Increases font size
                }" @click="isOpen = false" />
            </div>
        </template>
    </USlideover>
</template>

<script setup lang="ts">
import MENUDATA from '~/data/menu-data';
import { ref } from 'vue';
const isOpen = ref(false)
</script>