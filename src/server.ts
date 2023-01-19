// TypeScript -> JavaScript

// Typerscript -> Tipagem estática VsCode

import Fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = Fastify();
const prisma = new PrismaClient()

/**
 * Método HTTP: GET, POST, PUT, PATCH and DELETE
 */

app.get('/', async () => {
	const habits = await prisma.habit.findMany({
		where: {
		title: {
			startsWith: 'Beber',
		}
		}
	})
	return habits
});

app.listen({
	port: 3333
}).then(() => {
	console.log('HTTP server running!');
});

