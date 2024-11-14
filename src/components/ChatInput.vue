<template>
  <div id="chat-input-container">
    <input
      v-model="query"
      @keyup.enter="sendMessage"
      placeholder="Type your message..."
      id="message-input"
      aria-label="Message input"
      :disabled="isPending"
    />
    <button @click="sendMessage" class="send-btn" :disabled="isPending">Send</button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// import useChatMutation from '../composables/useChatMutation'

const events = defineEmits(['onMessage'])

const props = defineProps({
  isPending: {
    type: Boolean,
    default: false,
  },
})

const query = ref('')
// const { mutate, isPending, data } = useChatMutation()

const sendMessage = (e) => {
  if (!query.value || props.isPending) return

  events('onMessage', query.value)
  query.value = ''
}
</script>
<style scoped>
#chat-input-container {
  width: 100%;
  padding-block: 1.5rem;
  text-align: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
}
#message-input {
  min-width: 60%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
}

#message-input:disabled {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  cursor: not-allowed;
}

.send-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-bubble);
  color: white;
}

.send-btn:disabled {
  background-color: var(--color-border);
  color: var(--color-text);
  cursor: not-allowed;
}
</style>
