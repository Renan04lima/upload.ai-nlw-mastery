import { fastify } from 'fastify'
import { getAllPrompts } from './routes/get-all-prompts'

const app = fastify()

app.get('/', () => {
    return 'Hello world'
})

app.register(getAllPrompts)

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running!')
})