import fastify from 'fastify';
import fastifyRedis from '@fastify/redis';

const app = fastify({
    logger: true,
})

app.register(fastifyRedis, { url: 'redis-19864.c8.us-east-1-3.ec2.redns.redis-cloud.com:19864', 
password: 'RLcfp1x1wouNCsYbSf0TT67WfdRWNQRI'  })

// Test Redis connection
app.ready(err => {
    if (err) throw err;

    app.redis.ping((err, result) => {
        if (err) {
            app.log.error('Redis connection failed', err);
        } else {
            app.log.info('Redis connection successful:', result); 
        }
    });
});

app.listen({ port:3001 }, function(err, address){
    if (err) {
        app.log.error(err)
        process.exit(1)
      }
    app.log.info(`Server listening at ${address}`)
})