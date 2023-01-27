// TypeScript -> JavaScript

// Typerscript -> Tipagem estática VsCode
import Fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

// import { PrismaClient } from '@prisma/client';

const app = Fastify();
// const prisma = new PrismaClient();

app.register(cors);
app.register(appRoutes);
/**
 * Método HTTP: GET, POST, PUT, PATCH and DELETE
 */

app.listen({
	port: 3333
}).then(() => {
	console.log('HTTP server running!');
});
