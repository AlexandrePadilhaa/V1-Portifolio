import { AboutMe } from "@/components/home/aboutMe"
import { Projects } from "@/components/home/projects"
import Link from "next/link"

export default function Home() {
  return (
    <main >

      <h1>PAGINA HOME</h1>

      <Link href='/contato'>
        <h2>Ir para contatos</h2>
      </Link>
      <AboutMe/>
      <Projects/>
    </main>
  )
}
