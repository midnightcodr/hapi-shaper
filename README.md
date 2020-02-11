### About
This is a simple plugin to generate consistent json response using hapi.js.

### Usage Example
```javascript
const Hapi = require('@hapi/hapi')
const server = Hapi.server({
  port: 3000
})

server.route({
  method: 'GET',
  path: '/test',
  handler (request, h) {
    return h.success(
      {
        what: 'ever'
      },
      201
    )
  }
})
;(async () => {
  await server.register({
    plugin: require('hapi-shaper')
  })
  await server.start()
  console.log(`server running at ${server.info.uri}`)
})()

```