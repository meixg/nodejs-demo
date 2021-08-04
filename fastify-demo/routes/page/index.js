'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.view('index.tpl', {text: 'text'})
  })
};
