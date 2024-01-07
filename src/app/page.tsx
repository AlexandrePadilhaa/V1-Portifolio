import { AboutMe } from "@/components/home/aboutMe"
import { Projects } from "@/components/home/projects"


export default function Home() {
  return (
    <main className="py-12 px-6 md:px-32 space-y-10 md:space-y-18">
      <AboutMe/>
      <Projects/>
    </main>
  )
}
