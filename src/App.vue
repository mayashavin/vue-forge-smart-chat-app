<script setup lang="js">
import { ref } from 'vue'
import ChatInput from './components/ChatInput.vue'
import useChatMutation from './composables/useChatMutation'
const message = ref('')

const { data, mutate, isPending } = useChatMutation()

const startChat = async (query) => {
  message.value = query
  mutate(query)
}
</script>

<template>
  <div>
    <div id="messages-container">
      <div>{{ message }}</div>
      <div>
        {{ data }}
      </div>
    </div>
    <chat-input @onMessage="startChat" :isPending="isPending" />
  </div>
</template>
<style scoped>
#messages-container {
  height: calc(100vh - 140px);
  padding: 2rem;
  overflow-y: scroll;
}
</style>
