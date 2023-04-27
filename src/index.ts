import fastify from 'fastify'

import demoImport from './DemoImport/demoImport'

const server = fastify()

demoImport.dev()

server.get('/ping', async (request: any, reply) => {
  const {
    someParam
  } = request.body
  return reply.send(`pong!! ${someParam}`)
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})