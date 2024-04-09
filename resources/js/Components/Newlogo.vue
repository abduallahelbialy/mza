<template>
  <div >
          <img :src="imageUrl"  alt="Image Alt Text ">

  </div>
</template>

<script>
export default {
props: ['imagePath'], // تحديد الخاصية كمسار للصورة
    data() {
      return {
        imageUrl: 'https://mzaodin.com/website/log-removebg-preview.png', // استخدام المسار الممرر أو الافتراضي
      };
    },
}
</script>

<style>

</style>