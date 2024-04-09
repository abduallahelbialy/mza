<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import UserAvatar from '@/Components/UserAvatar.vue'

const userName = computed(() => usePage().props.auth.user.name)
const image_path = computed(() => usePage().props.auth.user.image_path)
</script>

<template>
  <UserAvatar
    :image_path="image_path"
    :username="userName"
    api="initials"
  />
</template>
