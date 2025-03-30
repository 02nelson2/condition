let upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL
let authToken = process.env.UPSTASH_REDIS_REST_TOKEN

type Command = 'zrange' | 'sismember' | 'get' | 'smembers'

export async function fetchRedis(
  command: Command,
  ...args: (string | number)[]
) {
  let commandUrl = `${upstashRedisRestUrl}/${command}/${args.join('/')}`

  let response = await fetch(commandUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Error executing Redis command: ${response.statusText}`)
  }

  let data = await response.json()
  return data.result
}
