<template>
    <div class="bg-cover bg-center h-96 my-12"
        style="background-image:linear-gradient(rgba(151, 128, 214, 1), rgba(151, 128, 214, 0.3)), url(/long-pharmacy.webp); ">

        <div class="container mx-auto flex flex-col items-center justify-center text-center h-full">
            <h1 class="text-3xl md:text-5xl font-extrabold text-white mb-4">Start Your Digital
                Journey,
                <br>Today
            </h1>
            <UButtonGroup>
                <UInput v-model="email" placeholder="Enter your email to get started" :ui="{
                    base: 'bg-white border-2 border-gray-700 rounded-lg py-4 px-6 w-80',

                }">
                </UInput>

                <UButton variant="solid" color="primary"
                    :ui="{ base: 'border-2 border-l-0 border-gray-700 rounded-lg px-4' }">Book a
                    Demo
                </UButton>
            </UButtonGroup>
        </div>
    </div>
</template>

<script setup lang="ts">
import { UButton } from '#components';

const email = ref('')
</script>