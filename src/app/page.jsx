'use client'

import useStore from "./section/store";
import S1 from './section/section1'
import S2 from './section/section2'
import S3 from './section/section3'

import { useEffect, useRef ,useState} from "react";

export default function Home() {
  const ss=useStore((state)=>state.ss)
  const sT=useStore((state)=>state.sT)
  const oTT=useStore((state)=>state.oTT)
  const sec3OTT=useStore((state)=>state.sec3OTT)
  const Sec1=useStore((state)=>state.Sec1)
  const x=useRef()
  const scrollRef=useRef()

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const delta = e.deltaY; 
      scrollRef.current.scrollTop += delta * .5; 
      e.preventDefault(); 
    };

    scrollRef.current.addEventListener('wheel', handleSmoothScroll);

    return () => {
      scrollRef.current.removeEventListener('wheel', handleSmoothScroll);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY === 0 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  function scroll(e){
    const st=e.target.scrollTop
    const sec3Ott =(x.current.offsetTop)

    ss(st)
    if(st>-1){
      Sec1(-st)
    }
    if(st>3700){
      const y=st
      sec3OTT(y)
    }else{
      sec3OTT(3700)
   
    }
  }
  return (
    <main className="w-[100%] overflow-hidden h-[100vh]">
      <div className={isScrolled ? 'smooth-scroll-active' : ''}>
      <div ref={scrollRef} onScroll={()=>scroll(event)} className="w-[calc(100%+25px)] h-[100vh] overflow-y-scroll relative">
        <div className="w-[5rem] h-[3rem] bg-slate-800 text-white fixed top-0 z-50">{Math.floor(sT)}</div>
        <S3/>
        <S2/>
        <S1/>
        <div ref={x} className="w-[100%] h-[100vh]"></div>
      </div>
      </div>
    </main>
  );
}
