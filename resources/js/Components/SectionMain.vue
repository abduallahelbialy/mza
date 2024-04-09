<script setup>
import { containerMaxW } from "@/config.js";
</script>

<template>
    <section class="py-40 px-2  " :class="containerMaxW">
        <slot />
    </section>
</template>
