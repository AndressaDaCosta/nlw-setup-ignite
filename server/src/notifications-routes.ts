import WebPush from 'web-push'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'
// console.log(WebPush.generateVAPIDKeys())

const publicKey =
	'BNTfgokJ0HnkfJWKCGZRH4qA8I68MaUt_10xDSBxyJ2Twa4icx1RHvZG7iHULB6ruvmc0ndvhEfQL-PJoNzNY0s'

const privateKey = 'Uq3923g4fbjOKCkufnrA06MZLlXOQp94lqudRzpzBRM'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
	// rota pro front end receber a chave publica

	app.get('/push/public_key', () => {
		return {
			publicKey
		}
	})

	// rota pra associar o id do usuário que aceitou receber notificações com o id do usuário logado

	app.post('/push/register', (request, reply) => {
		console.log(request.body)

		return reply.status(201).send()
	})

	// rota pra simular o envio de uma notificação
	app.post('/push/send', async (request, reply) => {
		// console.log(request.body)

		const sendPushBody = z.object({
			subscription: z.object({
				endpoint: z.string(),
				keys: z.object({
					p256dh: z.string(),
					auth: z.string()
				})
			})
		})
		const { subscription } = sendPushBody.parse(request.body)

		setTimeout(() => {
			WebPush.sendNotification(subscription, 'HELLO DO BACKEND')
		}, 7000)

		return reply.status(201).send()
	})
}
