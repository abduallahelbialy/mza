<script setup>
import { computed } from 'vue'

const props = defineProps({
  username: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: null
  },
  image_path: {
    type: String,
    default: null
  },
  api: {
    type: String,
    default: 'avataaars'
  }
})

const avatar = computed(
  () => props.avatar ?? `https://api.dicebear.com/7.x/${props.api}/svg?seed=${props.username.replace(/[^a-z0-9]+/i, '-')}`
)

const username = computed(() => props.username)
const image_path = computed(() => props.image_path)
// console.log('imggg',props.image_path)
</script>

<template>
  <div>
    <img
      :src="image_path"
      :alt="username"
      class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800"
    >
  </div>
</template>
