import { Inter } from "next/font/google";
import homeBg1 from "../Assets/home-bg-1.jpg";
import homeBg2 from "../Assets/home-bg-2.jpg";
import yellowBgImg from "../Assets/home-yellow-bg.jpg";
import blackBgImg from "../Assets/home-black-bg.jpg";
import Image from "next/image";
import { BiAperture } from "react-icons/bi";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="overflow-hidden bg-white dark:bg-white">

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-black dark:text-black">

        <div className="pl-5 pt-40">
          <div className="border rounded-none border-black p-1 mb-3 w-fit bg-white">
            <p className="text-sm uppercase">why qrates</p>
          </div>
          <div className="text-black dark:text-black mb-4">
            <p className="font-bold flex w-fit text-5xl leading-relaxed">
              Your music on <br /> vinyl.
              <br />
              Without the <br /> barriers.
            </p>
          </div>
          <div className="text-black dark:text-black mb-4">
            <p className="font-semibold w-fit text-2xl leading-normal">
              Full-service pressing, a global retail <br />
              network, customer support - and <br />
              you keep up to 85% of profits.
            </p>
          </div>
        </div>

        <div className="pt-20">
          <Image
            src={homeBg1}
            width="auto"
            height="auto"
            alt="Picture"
            style={{
              rotate: "z 10deg",
              marginLeft: "-40px",
            }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-black dark:text-white border-b-2 border-black ">
        <div className="pt-30">
          <Image
            src={homeBg2}
            width="auto"
            height="auto"
            alt="author"
            style={{
              rotate: "-6deg",
              marginTop: "-250px",
              marginLeft: "100px",
            }}
          />
        </div>

        <div className="mt-60 pl-20">
          <div className="text-black dark:text-black flex flex-col justify-center items-center">
            <p className="font-bold w-fit text-2xl leading-normal">
              Over $1 million paid to artists
            </p>
            <br />
            <BiAperture style={{ width: "6rem", height: "6rem" }} />
          </div>
        </div>
      </div>

      <div className="h-40 text-black dark:text-black">
        <h4 className="flex justify-center py-14 text-lg font-semibold">
          No matter where you`re at in your career, we`ve got a production model
          to suit you
        </h4>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-black dark:text-black border-t-2 border-b-2 border-black">
        <div className="bg-yellow-500 dark:bg-yellow-500 py-14 flex flex-col space-y-3 justify-center items-center border-r-2 border-black">
          <div className="border rounded-none border-black p-1 mb-3 w-fit bg-white">
            <p className="text-sm font-semibold uppercase">no risk, no waste</p>
          </div>
          <div className="font-bold text-3xl">
            <h3>Crowdfunding</h3>
          </div>
          <div className="font-medium text-lg">
            <p>
              Rally your fans and gather pledges. Press the exact <br />
              number of records you need, without having to pay <br />
              anything upfront
            </p>
          </div>
          <div>
            <Image src={yellowBgImg} width={500} height={500} alt="author1" />
          </div>
          <div>
            <button className="bg-black dark:bg-black text-white dark:text-white uppercase rounded-full w-52 px-6 py-2">
              Learn more
            </button>
          </div>
        </div>

        <div className="bg-gray-600 dark:bg-gray-600 py-14 flex flex-col space-y-3 justify-center items-center border-r-2 border-black">
          <div className="border rounded-none border-black p-1 mb-3 w-fit bg-white">
            <p className="text-sm font-semibold uppercase">get into it</p>
          </div>
          <div className="font-bold text-3xl">
            <h3>Press & Sell</h3>
          </div>
          <div className="font-medium text-lg">
            <p>
              Launch your records, sooner. Take pre-orders from <br />
              fans and we`ll take care of the rest <br />
            </p>
          </div>
          <div>
            <Image src={blackBgImg} width={500} height={500} alt="author1" />
          </div>
          <div>
            <button className="bg-black dark:bg-black text-white dark:text-white uppercase rounded-full w-52 px-6 py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="h-40 text-black dark:text-black bg-white dark:bg-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
        <div className="col-span-2 flex justify-start items-center pl-5">
          <p className="text-base font-semibold">
            Just after straight up vinyl pressing? We do that too. Records are
            shipped in bulk to wherever you <br /> need.
          </p>
        </div>
        <div className="flex underline font-semibold justify-end items-center pr-12">
          <Link href={"/"}>START A PRESS ONLY PROJECT</Link>
        </div>
      </div>
    </div>
  );
}
