<template>
    <div>
        <h1 class="text-4xl">Header</h1>
        <UIcon name="i-lucide:atom" class="size-15" />
        <UButton color="primary" label="Hello" />
        <slot />
        <h1 class="text-4xl text-[var(--ui-accent)]">Footer</h1>
    </div>
</template>