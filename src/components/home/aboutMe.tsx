import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',
    });

export const AboutMe = () => {
    return (
        <main className="flex flex-col-reverse md:flex-row justify-center items-center text-center gap-10 md:gap-16 py-8 text-lg xl:text-left xl:flex-nowrap " >
            <div className=" text-white flex flex-col items-center xl:items-start gap-5 w-full xl:w-120">

                <h1 className="text-3xl sm:text-7xl "> Olá! Prazer,&nbsp;&nbsp;
                <span>Alexandre Padilha</span></h1>
                

                <div className="mb-12">
                    <h2 className={`${roboto.className} mb-12`}>
                    Sou estudante de Sistemas de Informação na UTFPR - Curitiba-PR, com experiência como desenvolvedor front-end voluntário no projeto de extensão NOS - NOSSO OLHAR SOLIDÁRIO. Entusiasta de tecnologia, estou em busca de oportunidades para aplicar e expandir meus conhecimentos na criação de soluções inovadoras.
                    </h2>
                    <Link href="/contato" className="p-3 bg-purple w-fit text-xl rounded-lg transition-all hover:bg-opacity-50"> Converse comigo!</Link>
                </div>

                <ul className=" flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                    <li className="w-fit p-2 rounded-md">C/C++</li>
                    <li className="w-fit p-2 rounded-md">Html/css</li>
                    <li className="w-fit p-2 rounded-md">Typescript</li>
                    <li className="w-fit p-2 rounded-md">SQL/Postgree</li>
                </ul>

            </div>
            <div className="relative ">
                <Image className="rounded-full"
                    src="https://avatars.githubusercontent.com/u/105119507?s=400&v=4"
                    alt="Foto de perfil"
                    unoptimized
                    width={300}
                    height={300}
                />
            </div>
            
        </main>);
}
