import { z } from 'zod'

export let addFriendValidator = z.object({
  email: z.string().email(),
})
