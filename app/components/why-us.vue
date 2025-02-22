<template>
    <div class="container mx-auto max-w-5xl p-6 rounded-lg mb-8">
        <h1 class="text-3xl md:text-5xl text-center">Why Choose Us?</h1>
        <div class="flex flex-col md:flex-row gap-6 justify-between my-8">
            <div class="flex-1">
                <UIcon name="solar:monitor-smartphone-bold-duotone" class="size-16 mr-3" />
                <h3 class="text-md  leading-5 mt-3 font-bold">
                    Zero Hardware Investment</h3>
                <p>
                    Works on your existing devices
                    No expensive equipment needed
                    Start immediately after signup
                </p>
            </div>
            <div class="flex-1">
                <UIcon name="ic:sharp-offline-pin" class="size-16 mr-3" />

                <h3 class="text-md leading-5 mt-3 font-bold">Offline-Ready

                </h3>
                <p>
                    Continuous operation during power/internet outages
                    Automatic sync when connected
                    Never lose your data
                </p>
            </div>

            <div class="flex-1">
                <img src="/nepal.svg" alt="Nepal Drug Database" class="size-16">
                <h3 class="text-md  leading-5 mt-3 font-bold">Nepal-Focused</h3>
                <p>
                    Built for Nepali pharmacies
                    Local drug database
                    Nepali language support
                    Local support team
                </p>
            </div>

        </div>
    </div>
</template>
