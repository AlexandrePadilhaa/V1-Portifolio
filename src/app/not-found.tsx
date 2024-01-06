import Link from "next/link";
import { Metadata } from 'next'
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: '404 | Alexandre Padilha',
}

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',
    });

const NotFound = () => {
    return(
        <div className=" text-center mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-12">
            <h1 className="text-7xl font-bold text-black">404</h1>
            <p className="flex flex-col space-y-8">
                <span>Ops, não foi possivel encontrar essa página</span>
            </p>
            <Link  href='/'className={`${roboto.className} tx-dark-purple mb-12`}> Ir para a Home </Link>
          
        </div>
    );
}

export default NotFound;