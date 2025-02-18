<template>
    <div
        class="relative inset-0 -z-10 h-full w-full bg-[var(--ui-lighter)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div
            class="fixed left-0 right-0 top-0 -z-10 m-auto h-[610px] w-[610px] rounded-full bg-[var(--ui-primary)] opacity-30 blur-[100px]" />
        <SiteHeader />

        <main>
            <div id="main-content">
                <slot />
            </div>
        </main>
        <footer>
            Footer
        </footer>
    </div>
</template>