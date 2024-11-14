import {
  useMutation
} from '@tanstack/vue-query'
import {
  reactive
} from 'vue';

export default function useChatMutation() {
  const history = reactive([]);

  const {
    mutate,
    data,
    isPending,
    isError,
    error
  } = useMutation({
    mutationFn: async (query) => {
      history.push({
        role: 'user',
        message: query,
      });
      history.push({
        role: 'assistant',
        message: '...',
      })
      const data = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      }).then((res) => res.json())

      history[history.length - 1].message = data;

      return data;
    }
  })

  return {
    history,
    mutate,
    data,
    isPending,
    isError,
    error,
  }
}
