import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from 'next-themes';
import { FcGlobe } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { IoIosLogIn } from "react-icons/io";


//-----------------------------------------------------
function Navbar() {
    const {theme, setTheme} = useTheme();

    return (
        <header className="text-white-100 sticky top-0 z-50 bg-white dark:bg-white body-font">
            <div className='container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center'>
                <Link href={"/"} className='flex title-font font-extrabold items-center uppercase text-gray-100'>
                    <Image alt="Logo" src={"/Logo.png"} width={50} height={50} />
                </Link>
                <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                    <Link href={"/discover"} className='flex items-center text-black dark:text-black text-base  hover:text-purple-800'>
                        <p className='text-sm font-semibold mx-2 flex flex-row justify-center items-center'>
                            <FcGlobe style={{fontSize:'1.3rem',paddingRight:'3px'}} />DISCOVER
                        </p>
                    </Link> 
                    <Link href={"/record"} className='flex items-center text-black dark:text-black text-base hover:text-purple-800'>
                        <p className='text-sm font-semibold mx-2 flex flex-row justify-center items-center'>
                            <FcAbout style={{fontSize:'1.3rem',paddingRight:'3px'}} />RECORD
                        </p>
                    </Link> 
                    <Link href={"/login"} className='flex items-center text-black dark:text-black text-base hover:text-purple-800'>
                        <p className='text-sm font-semibold mx-2 flex flex-row justify-center items-center'>
                            <IoIosLogIn style={{fontSize:'1.3rem',paddingRight:'3px'}} />LOG IN
                        </p>
                    </Link> 
                    <button 
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className='flex flex-row text-white bg-black h-6 p-1 ml-2 rounded-3xl dark:text-black dark:bg-white items-center'
                    >
                        {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;