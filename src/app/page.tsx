import { AboutMe } from "@/components/home/aboutMe"
import { Projects } from "@/components/home/projects"


export default function Home() {
  const projects = [
    {
      slug : 'Jogo 2D orientado a objetos',
      name : 'Jogo 2D orientado a objetos',
      description: "Jogo desenvolvido na matéria Técnicas de programação utilizando orientação a objetos e padrões de projeto na linguagem C++ com a bibliotéca gráfica SFML.",
      image: {
        url: 'https://i.imgur.com/SHNeNu9.png', alt:'imagem do projeto'
      }
    }
  ];
  return (
    <main className="py-12 px-6 md:px-32 space-y-10 md:space-y-18">
      <AboutMe/>
      <Projects projects={projects}/>
    </main>
  )
}
