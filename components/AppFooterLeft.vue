<template>
  <div>
    <p>© {{ year }} DabAZ.</p>
  </div>
</template>

<script setup>
  const year = new Date().getFullYear();
</script>