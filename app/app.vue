<script lang="ts" setup>
// Example usage of public env variable
const config = useRuntimeConfig();

// eslint-disable-next-line no-console
console.log(config.public.envExample);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
