import { Metadata } from 'next'
import { CopyButton } from "@/components/communs/copyButton";


export const metadata: Metadata = {
    title: 'Contatos | Alexandre Padilha',
}

export default function Contatos() {
    return (
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-16 md:px-32">
            <h1 className=" text-3xl text-center">CONTATO</h1>
            <ul className="table mx-auto space-y-6 md:space-y-8">
                <li className="md:text-xl">
                    <samp className="font-bold">email</samp>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="mailto:alexandrepadilha.h@gmail.com" className="text-sm md:text-lg text-slate-500 underline truncate">alexandrepadilha.h@gmail.com</a>
                        <CopyButton copyText={"alexandrepadilha.h@gmail.com"}/>
                    </div>
                </li>
                <li>
                    <samp className="font-bold">Linkdin</samp>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="https://www.linkedin.com/in/alexandre-padilha-9820b323a/" className="text-sm md:text-lg text-slate-500 underline truncate">https://www.linkedin.com/in/alexandre-padilha-9820b323a/</a>
                    </div>
                </li>
                <li>
                    <samp className="font-bold">GitHub</samp>
                    <div className="flex gap-1 md:gap-3 items-center">
                        <a href="https://github.com/AlexandrePadilhaa" className="text-sm md:text-lg text-slate-500 underline truncate">https://github.com/AlexandrePadilhaa</a>
                    </div>
                </li>
            </ul>
           

        </div>)
}