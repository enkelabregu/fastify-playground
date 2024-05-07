import fastify from 'fastify';

const app = fastify({
    logger: true,
})


app.listen({ port:3001 }, function(err, address){
    if (err) {
        app.log.error(err)
        process.exit(1)
      }
    app.log.info(`Server listening at ${address}`)
})