import homeBg1 from "../../Assets/home-bg-1.jpg";
import { useState } from "react";
import yellowBgImg from "../../Assets/home-yellow-bg.jpg";
import blackBgImg from "../../Assets/home-black-bg.jpg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import blackBg from "../../Assets/discover-bg-black-01.jpg";
import purpleBg from "../../Assets/discover-bg-purp-02.jpg";

//----------------------------------------------------------------------

function Discover() {
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (id) => {
    setOpenItems({ ...openItems, [id]: !openItems[id] });
  };

  const accordianDetailsList = [
    {
      id: 1,
      title: "Design & Customization",
      content: "Info about design & custom",
    },
    {
      id: 2,
      title: "Mastering",
      content: "Info about mastering",
    },
    {
      id: 3,
      title: "Artwork Assistance",
      content: "Info about artwork",
    },
    {
      id: 4,
      title: "Pressing",
      content: "Info about pressing",
    },
    {
      id: 5,
      title: "Free Storage",
      content: "Info about storage",
    },
    {
      id: 6,
      title: "Shop",
      content: "Info about shop",
    },
    {
      id: 7,
      title: "Digital  Downloads",
      content: "Info about digital downloads",
    },
    {
      id: 8,
      title: "Customer Support",
      content: "Info about customer",
    },
    {
      id: 9,
      title: "Artist Support",
      content: "Info about artist support",
    },
  ];

  //--------------------------------------------------------------------------------
  return (
    <div className="overflow-hidden bg-white dark:bg-white text-black dark:text-white">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 sm:grid gap-1">
        <div className="px-3 py-3 flex flex-col justify-center items-center">
          <div className="rounded-none border-black font-semibold border-2 p-1 mb-4 w-fit">
            <p className="text-md uppercase text-black dark:text-black">
              our service
            </p>
          </div>
          <div className="text-black dark:text-black mb-10">
            <p className="font-bold flex w-fit text-5xl leading-relaxed uppercase">
              You make music. <br />
              We do the rest.
            </p>
          </div>
          <div className="pt-2 py-10 mb-5">
            <Image
              src={homeBg1}
              alt="react"
              style={{
                rotate: "z -5deg",
              }}
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="text-black dark:text-black mb-7 w-3/4">
            <p className="font-semibold text-lg leading-normal">
              We want you to be able to put all your energy into the creative
              side of making music. So we created a one-stop shop for everything
              else.
            </p>
          </div>
          <div>
            <button className="flex p-1 px-10 font-semibold mb-5 bg-white dark:bg-white rounded-full uppercase text-black dark:text-black border-black border-2">
              Learn more
            </button>
          </div>
        </div>

        <div className="px-3 py-3 flex flex-col justify-center items-center">
          {accordianDetailsList.map((i) => {
            return (
              <div key={i.id}>
                {i.id === 1 && (
                  <div className="bg-black dark:bg-black h-[6rem]">
                    <p className="font-bold text-2xl p-2 flex justify-start text-white dark:text-white">
                      Making Records
                    </p>
                  </div>
                )}
                {i.id === 5 && (
                  <div className="bg-black dark:bg-black h-[6rem]">
                    <p className="font-bold text-2xl p-2 flex justify-start text-white dark:text-white">
                      Storage & Distribution
                    </p>
                  </div>
                )}
                {i.id === 8 && (
                  <div className="bg-black dark:bg-black h-[6rem]">
                    <p className="font-bold text-2xl p-2 flex justify-start text-white dark:text-white">
                      Support
                    </p>
                  </div>
                )}
                <div
                  key={i.id}
                  className="flex flex-col bg-white border-black border-2"
                >
                  <button
                    onClick={() => toggleAccordion(i.id)}
                    className="flex flex-row bg-white w-[25rem] px-4 py-4 font-semibold text-xl justify-between items-center text-black dark:text-black"
                  >
                    {i.title}{" "}
                    {openItems[i.id] ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                  {openItems[i.id] && (
                    <div className="overflow-hidden h-20 bg-slate-100 border-slate-500 border-t-2">
                      <p className="text-black dark:text-black font-medium p-2">
                        {i.content}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid text-white dark:text-white border-t-2 border-b-2 border-black">
        <div className="bg-black dark:bg-black py-14 flex flex-col space-y-3 justify-center items-center border-r-2 border-black">
          <div className="mb-6">
            <Image src={blackBg} width={500} height={500} alt="author1" />
          </div>
          <div className="border rounded-none border-black p-1 mb-3 w-fit bg-white">
            <p className="text-sm font-semibold uppercase text-black dark:text-black">
              retail network
            </p>
          </div>
          <div className="font-bold text-3xl">
            <h3>
              Worldwide distro, <br /> demystified
            </h3>
          </div>
          <div className="font-medium text-lg">
            <p>
              Get direct access to over 150 of our retail partners across the{" "}
              <br />
              globe
            </p>
          </div>
        </div>

        <div className="bg-fuchsia-600 dark:bg-fuchsia-600 py-14 flex flex-col space-y-3 justify-center items-center border-r-2 border-black">
          <div className="mb-6">
            <Image
              src={purpleBg}
              width={500}
              height={400}
              alt="author1"
              style={{ borderColor: "black", borderWidth: "2px" }}
            />
          </div>
          <div className="border rounded-none border-black p-1 mb-3 w-fit bg-white">
            <p className="text-sm font-semibold uppercase text-black dark:text-black">
              customer Support
            </p>
          </div>
          <div className="font-bold text-3xl">
            <h3>
              Here to help, <br /> whenever you need it.
            </h3>
          </div>
          <div className="font-medium text-lg">
            <p>
              Wheather you`re an artist in the middle of product, or a fan with{" "}
              <br />
              questions about your order, our team is here to help. <br />
            </p>
          </div>
        </div>
      </div>

      <div className="text-black dark:text-black bg-white dark:bg-white w-full py-10 flex flex-col justify-center items-center">
        <div className="rounded-none border-black font-semibold border-2 mb-3 w-fit">
          <p className="text-md uppercase p-1">Community</p>
        </div>
        <div className="flex w-fit justify-center items-center flex-col mb-5">
          <p className="font-semibold text-3xl mb-3">
            Join a growing community
          </p>
          <p className="text-base font-semibold">
            We`re building a home for the next generation of vinyl lovers.
            <br />
            Get in front of fans, connect with artists, labels and stores.
          </p>
        </div>
        <div>
          <button className="bg-white dark:bg-white text-black dark:text-black uppercase rounded-full border-black border-2 font-semibold w-52 px-6 py-2">
            browse artists
          </button>
        </div>
      </div>
    </div>
  );
}

export default Discover;
