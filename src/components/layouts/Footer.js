import Link from "next/link";
import * as React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { usePathname } from 'next/navigation'

//------------------------------------------------------
function Footer() {
  const pathname = usePathname();
  
  //----------------------------------
  return (
    <footer className="w-full text-white dark:text-white bg-slate-950 dark:bg-slate-950">
      <div className="flex-col-2">
        {pathname === '/login' || pathname === '/signup' ? '' : 
        <div className="container max-w-full grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pt-6">
          <div className="px-20">
            <p className="font-semibold text-lg uppercase mb-2">for artist</p>
            <p className="font-semibold text-md">Why Qrates?</p>
            <p className="font-semibold text-md">Crownfunding</p>
            <p className="font-semibold text-md">Press & Sell</p>
            <p className="font-semibold text-md">Our Service</p>
            <p className="font-semibold text-md">Artist Toolkit</p>
            <p className="font-semibold text-md">Referral Program</p>
          </div>
          <div className="px-20">
            <p className="font-semibold text-lg uppercase mb-2">for fans</p>
            <p className="font-semibold text-md">Discover</p>
            <p className="font-semibold text-md">Records</p>
            <p className="font-semibold text-md">Stories</p>
            <p className="font-semibold text-md">Lists</p>
            <p className="font-semibold text-md">Artists & Labels</p>
          </div>
          <div className="px-20">
            <p className="font-semibold text-lg uppercase mb-2">our company</p>
            <p className="font-semibold text-md">About Qrates</p>
            <p className="font-semibold text-md">Careers</p>
            <p className="font-semibold text-md">Partners</p>
          </div>
          <div className="px-20">
            <p className="font-semibold text-lg uppercase mb-2">Help</p>
            <p className="font-semibold text-md">Support Center</p>
            <p className="font-semibold text-md">Contact Us</p>
            <p className="font-semibold text-md">Returns</p>
            <p className="font-semibold text-md">Shipping</p>
          </div>
        </div>}

        <div className="max-w-full p-3 flex flex-col items-center justify-end space-y-2">
          <div className="w-full flex flex-wrap md:flex-row lg:flex-row sm:flex-row items-center justify-end space-x-2">
            <FaFacebook style={{ fontSize: "1.6rem" }} />
            <FaInstagram style={{ fontSize: "1.6rem" }} />
            <AiFillTwitterCircle style={{ fontSize: "1.6rem" }} />
          </div>
          <div className="w-full flex flex-wrap md:flex-row lg:flex-row sm:flex-row items-center justify-end space-x-2">
            <Link href={"/terms"} className="text-white">
              <p className="text-xs font-semibold mx-2">Terms of Services</p>
            </Link>
            <Link href={"/policy"} className="text-white">
              <p className="text-xs font-semibold mx-2">Privacy Policy</p>
            </Link>
            <p className="text-xs font-semibold mx-2 text-white">
              Copyright@TDMS Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
