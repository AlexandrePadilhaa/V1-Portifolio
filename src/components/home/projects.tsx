import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/home.s";

interface projectsProps {
    projects: Project[];
}

export const Projects = ({ projects }: projectsProps) => {
    return (<article className=" space-y-16 flex flex-col items-center xl:items-start  text-center xl:text-left">
        <h2 className="text-3xl">Projetos recentes</h2>

        <ul className="flex flex-wrap  gap-16 justify-center xl:justify-start">
            {projects.map(({ slug, name, image, description }, index) => (
                <Link key={name + index} href={`/projects/${slug}`}>
                    <li className="text-md relative">
                        <div className="text-purple rounded-xl w-14 h-14 text-center flex justify-center items-center  text-3xl ">
                            <samp>{index + 1}</samp>
                        </div>
                        <samp className="text-xl font-bold">{name}</samp>
                        <Image
                            width={500}
                            height={300}
                            src={image.url}
                            alt={image.alt}
                            className="object-cover rounded-2xl h-[18.75rem] mb-4"
                        />
                        <div className=" text-xl max-w-xl">{description}</div>
                    </li>
                </Link>
            ))}
        </ul>
    </article >);
}
