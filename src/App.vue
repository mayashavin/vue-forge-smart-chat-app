<script setup lang="js">
import { ref } from 'vue'
import ChatInput from './components/ChatInput.vue'

const data = ref('')

const startChat = async () => {
  console.log('start chat')
  const result = await fetch('.netlify/functions/chat').then((res) => res.json())
  console.log(result)
  data.value = result
}
</script>

<template>
  <div>
    <div id="messages-container"></div>
    <chat-input />
  </div>
</template>
<style scoped>
#messages-container {
  height: calc(100vh - 140px);
  padding: 2rem;
  overflow-y: scroll;
}
</style>
