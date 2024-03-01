"use client";

import { useEffect, useRef, useState } from "react";
import useStore from "./store";
import Link from "next/link";
import Image from "next/image";

export default function S3() {
  const sec3OTt = useStore((state) => state.sec3OTt);

  const sec3 = useRef();

  return (
    <>
      <section
        ref={sec3}
        style={{ top: sec3OTt }}
        className="w-[100%] z-20 h-[100vh] absolute bg-black text-white flex justify-center content-center flex-wrap"
      >
        <div className="w-[100%] h-[10vh]"></div>
        <p className="w-[100%] xl:w-[51%] text-[.7rem] xl:text-[1rem] text-center px-0 lg:px-5">
          Further information on official fuel consumption figures and the
          official specific CO2 emissions of new passenger cars can be found in
          the “Guide on the fuel economy, CO2 emissions and power consumption of
          new passenger car models”, which is available free of charge at all
          sales dealerships and from DAT Deutsche Automobil Treuhand GmbH,
          Hellmuth-Hirth-Str. 1, D-73760 Ostfildern, Germany and at www.dat.de.
        </p>
        <p className="w-[100%] xl:w-[51%] text-[.7rem] xl:text-[1rem] text-center px-0 lg:px-5 my-5">© 2024 BUGATTI Automobiles S.A.S.</p>
        <ul className="w-[100%] xl:w-[61%] text-[.9rem] xl:text-[1.5rem] text-center px-0 lg:px-5  flex justify-center flex-wrap gap-5">
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                BUGATTI LIFESTYLE
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                BUGATTI HERITAGE
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                MODELS
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                CUSTOMIZATION
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                OWNERSHIP
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                NEWS & ZEITGEIST
                </Link>
            </li>
        </ul>
        <ul className="w-[100%] xl:w-[61%] text-[.7rem] xl:text-[1rem] text-center px-0 lg:px-5  flex justify-center flex-wrap gap-5">
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Data Protection Notice
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Legal Notice
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Cookie Settings
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                UK Modern Slavery Act
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Contact
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Code Of Conduct
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Gender Index
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Careers
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Fuel Consumption
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href=''>
                Compliance & Whistleblower
                </Link>
            </li>
        </ul>
        <ul className="w-[100%] xl:w-[61%] text-[.9rem] xl:text-[1.5rem] text-center px-0 lg:px-5  flex justify-center flex-wrap gap-10">
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href='https://instagram.com/@reza-ojaghi-dro' title="INSTAGRAM">
                <i className="bi bi-instagram"></i>
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href='https://github.com/REZA-OJAGHI-DRO' title="GITHUB">
                <i className="bi bi-github"></i>
                </Link>
            </li>
            <li className="hover:text-blue-700 transition-all duration-300">
                <Link href='https://linkedin.com/in/reza-ojaghi-428748280/' title="LINKEDIN">
                <i className="bi bi-linkedin"></i>
                </Link>
            </li>
        </ul>
        <figure className="w-[100%] xl:w-[51%] flex justify-center items-center mt-2 gap-5">
            <figcaption className="uppercase text-[1.5rem]">reza ojaghi</figcaption>
        <Image
            src="/15.jpg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius:'50%',
            }}
          ></Image>
        </figure>
        <div className="w-[100%] h-[13vh]"></div>
      </section>
    </>
  );
}
