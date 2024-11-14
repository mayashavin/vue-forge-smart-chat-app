import {
  useMutation
} from '@tanstack/vue-query'

export default function useChatMutation() {
  return useMutation({
    mutationFn: async (query) => {
      const data = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      }).then((res) => res.json())


      console.log(data);
      return data;
    }
  })
}
