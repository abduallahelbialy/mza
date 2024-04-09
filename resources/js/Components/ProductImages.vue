<template>
    <div>
      <!-- يتم استيراد DraggableComponent هنا -->
      <template :items="items" @drag-end="onDragEnd">
        <!-- تمرير العناصر لتكون قابلة للسحب كأطفال -->
        <div v-for="(item, index) in items" :key="index">{{ item }}</div>
      </template>
    </div>
  </template>

  <script>

  export default {

    data() {
      return {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4']
      };
    },
    methods: {
      onDragEnd(event) {
        console.log('Dragging ended:', event);
      }
    }
  };
  </script>

  <style>
  </style>
