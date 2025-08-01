<script lang="ts" setup>
// Example usage of public env variable
const config = useRuntimeConfig();

// eslint-disable-next-line no-console
console.log(config.public.envExample);

// Store
const store = useCounterStore();
const { count } = storeToRefs(store);

// eslint-disable-next-line no-console
console.log(`Count from store: ${count.value}`);
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
