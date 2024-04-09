<script setup>
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import Navbar from '@/Components/Landing/Navbar.vue';

</script>

<template>
    <div>
        <Navbar :canLogin="canLogin" />

        <slot />

    </div>
</template>
