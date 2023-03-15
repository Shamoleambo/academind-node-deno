const text = 'Test text to a file!!!'

const encoder = new TextEncoder()
const data = encoder.encode(text)

Deno.writeFile('message.txt', data).then(() => {
  console.log('File written')
})
