// TypeScript -> JavaScript

// Typerscript -> Tipagem estática VsCode

// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

/**
 * Método HTTP: GET, POST, PUT, PATCH and DELETE
 */

import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors)
app.register(appRoutes)

app.listen({
	port: 3333,
	host: '0.0.0.0'
}).then(() => {
	console.log('HTTP Server running!')
})

// host: '0.0.0.0'
