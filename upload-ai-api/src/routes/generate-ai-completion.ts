import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { streamToResponse, OpenAIStream } from 'ai'
import { prisma } from '../lib/prisma'
import { openai } from '../lib/openai'


export const generateAICompletion = async (app: FastifyInstance) => {
    app.post('/ai/complete', async (req, res) => {
        const bodySchema = z.object({
            videoId: z.string().uuid(),
            prompt: z.string(),
            temperature: z.number().min(0).max(1).default(0.5)
        })

        const { videoId, temperature, prompt } = bodySchema.parse(req.body)

        const video = await prisma.video.findFirstOrThrow({
            where: {
                id: videoId
            }
        })

        if(!video.transcription) return res.status(400).send('Missing transcription of video')

        const promptMessage = prompt.replace('{transcription}', video.transcription)

        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo-16k',
            temperature,
            messages: [
                { 
                    role: 'user',
                    content: promptMessage
                }
            ],
            stream: true
        })


        const stream = OpenAIStream(response)
        
        streamToResponse(stream, res.raw, {
            headers:{
               'Access-Control-Allow-Origin': '*',
               'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS' 
            }
        })
    })
}