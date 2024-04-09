<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-black opacity-75"></div>
      <div class="relative max-w-4xl mx-auto px-4">
        <div class="bg-white rounded-lg shadow-lg p-8">
          <img :src="imageUrl" alt="Image" class="w-full">
          <button @click="closeModal" class="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      imageUrl: String
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>

  <style>
  </style>
