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

// solves ctrl-c not ending process(es) correctly
const terminator = (sig: any) => {
  if (typeof sig === "string") {
    process.exit(1)
  }
  console.log('%s: Node server stopped.', Date() )
}

// implement for every process signal related to exit/quit
['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
].forEach(function(element) {
  process.on(element, function() { terminator(element) })
})