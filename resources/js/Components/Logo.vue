<template>
    <figure >
      <img :src="imageUrl" class="w-100 d-inline-block m-0 p-0" style="width:100%;  " alt="Image Alt Text ">
    </figure>
  </template>

  <script>
  export default {
    props: ['imagePath'], // تحديد الخاصية كمسار للصورة
    data() {
      return {
        imageUrl: 'https://mzaodin.com/website/log-removebg-preview.png', // استخدام المسار الممرر أو الافتراضي
      };
    },
  };
  </script>
