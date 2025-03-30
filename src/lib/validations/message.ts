import { z } from 'zod'

export let messageValidator = z.object({
  id: z.string(),
  senderId: z.string(),
  text: z.string(),
  timestamp: z.number(),
})

export let messageArrayValidator = z.array(messageValidator)

export type Message = z.infer<typeof messageValidator>
