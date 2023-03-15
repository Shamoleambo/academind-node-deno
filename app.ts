import { serve } from 'https://deno.land/std@0.179.0/http/mod.ts'

serve(_req => new Response('Hello, world'), {
  onListen({ port }) {
    console.log(`Server started at http://localhost:${port}`)
    // ... more info specific to your server ..
  }
})
