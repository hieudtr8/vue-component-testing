<template>
  <div>
    <!-- Basic slot -->
    <div class="content">
      <slot />
    </div>
    <!-- Named slot -->
    <header>
      <slot name="header" />
    </header>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup></script>