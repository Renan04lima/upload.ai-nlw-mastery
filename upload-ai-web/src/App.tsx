import { Button } from "./components/ui/button"
import { Github, FileVideo, Upload } from "lucide-react"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"
import { Label } from "./components/ui/label"

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Desenvolvido com 💜 pela Rocketseat e Renan</span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      <main className="flex-1 flex p-6 gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-1 flex-1">
            <Textarea
              className="resize-none leading-relaxed p-4"
              placeholder="Inclua o prompt para a AI..."
            />
            <Textarea
              className="resize-none leading-relaxed p-4"
              placeholder="Resultado gerado pela IA..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: vc pode usar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form action="" className="space-y-6">
            <label 
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="h-4 w-4"/>
              Carregar vídeo
            </label>
            <input type="file" id="video" accept="video/mp4"className="sr-only"/>

            <Separator orientation="vertical" className="h-6"/>

            <div className="space-y-6">
              <Label htmlFor="transcription_prompt">
                Prompt de transcrição
              </Label>
              <Textarea 
                id="transcription_prompt" 
                className="min-h-20 leading-relaxed"
                placeholder="Inclua palavras-chaves mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Carregar vídeo
              <Upload className="h-4 w-4 ml-2"/>
            </Button>
          </form>

        </aside>
      </main>
    </div>
  )
}

export default App
