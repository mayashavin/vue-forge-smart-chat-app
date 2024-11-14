<template>
  <ul id="messages-container">
    <li v-for="(message, index) in history" :key="index">
      <chat-message :message="message.message" :isMainUser="message.role === 'user'" />
    </li>
  </ul>
  <chat-input @onMessage="startChat" :isPending="isPending" />
</template>
<script setup>
import ChatInput from './ChatInput.vue'
import ChatMessage from './ChatMessage.vue'
import useChatMutation from '../composables/useChatMutation'

const { history, mutate, isPending } = useChatMutation()

const startChat = async (query) => mutate(query)
</script>
<style scoped>
#messages-container {
  height: calc(100vh - 140px);
  padding: 2rem;
  overflow-y: scroll;
  list-style: none;
  max-width: 80%;
  margin: auto;
}

#messages-container li:nth-child(odd) {
  text-align: right;
}
</style>
