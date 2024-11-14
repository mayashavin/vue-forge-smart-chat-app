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
      try {
        const data = await fetch('/.netlify/functions/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        }).then(async (res) => {
          const response = await res.json();
          if (res.status !== 200) {
            throw new Error(response);
          }

          return res.json()
        })

        history[history.length - 1].message = data;

        return data;
      } catch (error) {
        history[history.length - 1].message = 'Sorry, I am having trouble understanding you right now. Please try again later.';
        throw error
      }
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
