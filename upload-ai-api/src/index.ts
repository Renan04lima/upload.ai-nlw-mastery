import { fastify } from 'fastify'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideo } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'

const app = fastify()

app.get('/', () => {
    return 'Hello world'
})

app.register(getAllPrompts)
app.register(uploadVideo)
app.register(createTranscription)

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running!')
})