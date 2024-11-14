<template>
  <article :class="`chat-message ${isMainUser ? 'main-user' : ''}`">
    {{ message }}
  </article>
</template>
<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  isMainUser: {
    type: Boolean,
    default: false,
  },
})
</script>
<style scoped>
.chat-message {
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  background-color: var(--color-background-soft);
  margin-bottom: 1rem;
  display: inline-block;
}

.chat-message.main-user {
  background-color: var(--color-background-bubble-soft);
  text-align: right;
}
</style>
