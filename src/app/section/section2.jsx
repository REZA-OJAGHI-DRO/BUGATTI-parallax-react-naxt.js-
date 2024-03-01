"use client";

import { useEffect, useRef } from "react";
import useStore from "./store";
import Image from "next/image";
import Link from "next/link";

export default function S2() {

  const sT = useStore((state) => state.sT);



  const play1=useRef()
function vid1(){
play1.current.play()
play1.current.nextElementSibling.style.display='none'
}
function vid11(){
play1.current.nextElementSibling.style.display='flex'
play1.current.pause()
}
  const play2=useRef()
function vid2(){
play2.current.play()
play2.current.nextElementSibling.style.display='none'
}
function vid22(){
play2.current.nextElementSibling.style.display='flex'
play2.current.pause()
}
  const play3=useRef()
function vid3(){
play3.current.play()
play3.current.nextElementSibling.style.display='none'
}
function vid33(){
play3.current.nextElementSibling.style.display='flex'
play3.current.pause()
}
  const play4=useRef()
function vid4(){
play4.current.play()
play4.current.nextElementSibling.style.display='none'
}
function vid44(){
play4.current.nextElementSibling.style.display='flex'
play4.current.pause()
}

  return (
    <section
    
      style={{ left: 0, top: sT }}
      className="w-[100%] h-[100vh] overflow-hidden absolute z-10 bg-slate-700"
    >
      <video
        src="/2.mp4"
        className="w-[100%] h-[100%] object-cover absolute"
        autoPlay
        playsInline
        muted
        loop
      >
        <source type="video/mp4" />
      </video>
      <article
       
        style={{ right: 100 - -sT }}
        className="w-[2200px] h-[100%] flex justify-around items-center gap-16 absolute translate-x-[120%] top-0 "
      >
        <figure className="w-[300px] h-[400px]">
          <Image
            src="/3.jpg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[2rem]">
                adidas X BUGATTI
              </h2>
              <p className="w-[300px] text-center text-[1.5rem]">
                Crafted for speed
              </p>
            </figcaption>
          </Link>
        </figure>
        <figure onMouseEnter={vid1} onMouseLeave={vid11} className="w-[300px] h-[400px] group">
          <video
          ref={play1}
            className="w-[300px] h-[400px] object-cover absolute"
            
            playsInline
            muted
            loop
            src="/5.mp4"
            poster="/4.jpg"
          >
            <source type="video.mp4" />
          </video>
          <Image
            src="/4.jpg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[2rem]">
              BOLIDE
              </h2>
              <p className="w-[300px] text-nowrap text-center text-[1.5rem]">
              W16 power unleashed
              </p>
            </figcaption>
          </Link>
        </figure>
        <figure onMouseEnter={vid2} onMouseLeave={vid22} className="w-[300px] h-[400px] group">
          <video
          ref={play2}
            className="w-[300px] h-[400px] object-cover absolute"
            
            playsInline
            muted
            loop
            src="/7.mp4"
            poster="/6.jpeg"
          >
            <source type="video.mp4" />
          </video>
          <Image
            src="/6.jpeg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[2rem]">
              W16 MISTRAL
              </h2>
              <p className="w-[300px] text-nowrap text-center text-[1.5rem]">
              The ultimate roadster
              </p>
            </figcaption>
          </Link>
        </figure>
        <figure onMouseEnter={vid3} onMouseLeave={vid33} className="w-[300px] h-[400px] group">
          <video
          ref={play3}
            className="w-[300px] h-[400px] object-cover absolute"
            
            playsInline
            muted
            loop
            src="/9.mp4"
            poster="/8.jpeg"
          >
            <source type="video.mp4" />
          </video>
          <Image
            src="/8.jpeg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[2rem]">
              SUR MESURE
              </h2>
              <p className="w-[300px] text-nowrap text-center text-[1.5rem]">
              Pinnacle of customization
              </p>
            </figcaption>
          </Link>
        </figure>
        <figure onMouseEnter={vid4} onMouseLeave={vid44} className="w-[300px] h-[400px] group">
          <video
          ref={play4}
            className="w-[300px] h-[400px] object-cover absolute"
            
            playsInline
            muted
            loop
            src="/11.mp4"
            poster="/10.jpg"
          >
            <source type="video.mp4" />
          </video>
          <Image
            src="/10.jpg"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[1.8rem]">
              CHAMPAGNE CARBON
              </h2>
              <p className="w-[300px] text-nowrap text-center text-[1.5rem]">
              The taste of excellence
              </p>
            </figcaption>
          </Link>
        </figure>
        <figure className="w-[300px] h-[400px]">
          <Image
            src="/12.png"
            alt="Picture of the author"
            width="300000"
            height="400000"
            style={{
              width: "300px",
              height: "400px",
              objectFit: "cover",
              position: "absolute",
            }}
          ></Image>
          <Link href="">
            <figcaption className="w-[300px] h-[400px] flex flex-wrap justify-center content-end p-10 absolute text-white">
              <h2 className="w-[300px] text-center text-nowrap text-[2rem]">
              NEWS
              </h2>
              <p className="w-[300px] text-center text-[1.5rem]">
              Go in depth
              </p>
            </figcaption>
          </Link>
        </figure>
      </article>
    </section>
  );
}
