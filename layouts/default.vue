<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
:root {
  --bg-color: #e0e0e0;
}

html,
body {
  background-color: var(--bg-color);
  color: #212529;
}

body {
  perspective: 1000px;
  transform-style: preserve-3d;
}
</style>
