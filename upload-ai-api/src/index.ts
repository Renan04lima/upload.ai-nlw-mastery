import { fastify } from 'fastify'
import { getAllPrompts } from './routes/get-all-prompts'
import { uploadVideo } from './routes/upload-video'
import { createTranscription } from './routes/create-transcription'
import { generateAICompletion } from './routes/generate-ai-completion'

const app = fastify()

app.get('/', () => {
    return 'Hello world'
})

app.register(getAllPrompts)
app.register(uploadVideo)
app.register(createTranscription)
app.register(generateAICompletion)

app.listen({
    port: 3333
}).then(() => {
    console.log('Server running!')
})