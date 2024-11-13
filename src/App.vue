<script setup lang="js">
import { ref } from 'vue'

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
    <button @click="startChat">Start Chat</button>
    <p>{{ data }}</p>
  </div>
</template>
