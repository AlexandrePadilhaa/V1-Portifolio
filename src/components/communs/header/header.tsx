"use client";
import Link from "next/link";
import { Roboto } from "next/font/google";
import Menu from "./menu";
import { useCallback, useState } from "react";
import MenuIcon from "../icons/menuIcon";
import IconHome from "../icons/iconHome";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
});

export const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
   
    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, [])

    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, [])

    return (<header className={` ${roboto.className} text-white bg-h-blue-500 text-sm  py-3 px-5 justify-center flex sticky top-0 z-20`}>
        <Link href='/'>
            <IconHome/>
        </Link>

       <button className="md:hidden p-" onClick={openMenu}>
        <MenuIcon  className="fill-white w-10 h-10 "/>
       </button>

       <nav className="md:flex hidden items-center gap-10 " >
                <Link href='/'>Sobre mim</Link>
                <Link href='/contato'>Contatos</Link>
                {/*<Link href='/projetos'>Portifolio</Link>*/}
            </nav>
      
        <Menu isVisible={false} onClose={closeMenu}/>
    </header>

    );
};