<template>
    <div>
        <!-- <h1 class="text-4xl">Header</h1>
        <UIcon name="i-lucide:atom" class="size-15" />
        <UButton color="primary" label="Hello" /> -->
        <Header />
        <main>
            <div id="main-content" class="container mx-auto px-4 py-8">
                <slot />
            </div>
            <p class="h-[2000px]">sss</p>
        </main>

        <h1 class="text-4xl text-[var(--ui-accent)]">Footer</h1>
    </div>
</template>

<style scoped>
#main-content {
    padding-top: 0;
    /* Make sure padding is initially 0 */
}
</style>