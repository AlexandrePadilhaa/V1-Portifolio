import Link from "next/link";
import MenuCloseIcon from "../icons/menuCloseIcon";
import IconHome from "../icons/iconHome";
interface MenuProps {
    isVisible: boolean,
    onClose: () => void;
}

const Menu = ({ isVisible, onClose }: MenuProps) => {
    return (
        <div className={`${isVisible ? 'flex': 'hidden'} fixid inset-0 w-full h-full`}>
            <div className="w-full bg-blue-500 h-92 shadow-md py-4 px-4">
                <div>
                    <Link href="/">  
                        <IconHome/>
                    </Link>
                    
                    <button onClick={onClose}>
                        <MenuCloseIcon/>
                    </button>
                </div>
                <nav >

                <Link href='/'>Sobre mim</Link>
                <Link href='/contatos'>Contatos</Link>
                {/*<Link href='/projetos'>Portifolio</Link>*/}
            </nav>
            </div>
        </div>
);}

export default Menu;