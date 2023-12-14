import Button from "@/components/Button"

export default function Login() {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="bg-whiteBlueGray ml-4 mr-4 rounded-3xl lg:max-w-3xl lg:m-auto w-full">
        <h1 className="text-center text-mediumToneBlack text-3xl lg:text-5xl font-semibold py-5 lg:pt-28 lg:pb-24">TG+</h1>
        <div className="flex justify-center gap-2 lg:gap-9 pb-5 lg:pb-9 text-xs lg:text-base">
          <div>
            <input type="checkbox" name="aluno" id="aluno" className="mr-1 rounded-full" />
            <label htmlFor="aluno" className="text-mediumToneBlack">Aluno</label>
          </div>
          <div>
            <input type="checkbox" name="orientador" id="orientador" className="mr-1 rounded-full" />
            <label htmlFor="orientador" className="text-mediumToneBlack">Orientador</label>
          </div>
          <div>
            <input type="checkbox" name="coordenador" id="coordenador" className="mr-1 rounded-full" />
            <label htmlFor="coordenador" className="text-mediumToneBlack">Coordenador</label>
          </div>
          <div>
            <input type="checkbox" name="banca" id="banca" className="mr-1 rounded-full" />
            <label htmlFor="banca" className="text-mediumToneBlack">Banca</label>
          </div>
        </div>
        <div className="pb-5 lg:pb-9 px-5 lg:px-16">
          <label htmlFor="usuario"></label>
          <input type="text" name="usuario" id="usuario" placeholder="Usuário" className="pl-8 py-4 rounded-10rem w-full" />
        </div>
        <div className=" pb-5 px-5 lg:px-16">
          <label htmlFor="senha"></label>
          <input type="password" name="senha" id="senha" placeholder="Senha" className="pl-8 py-4 rounded-10rem w-full" />
        </div>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="text-right pb-9"><p className="text-right text-mediumToneBlack pb-5 lg:pb-9 pr-4 lg:pr-16">Esqueci minha senha.</p></a>
        <Button href="/home-screen" className="mb mb-5 lg:mb-20 mx-5 lg:mx-16">
          <span className="inline-flex mx-auto py-4">Entrar</span>
        </Button>
      </section>
    </main>
  )
}
