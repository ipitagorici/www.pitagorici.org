"use client"
import FullScreenSection from "../_components/FullScreenSection";
import Image from "next/image";
import Brand from "../_components/Brand";
import DailyCarousel from "../_components/DailyCarousel";
import useViewportSize from "../_lib/useViewportSize";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { api } from "../_lib/apiRequest";
import { Article } from "../_types/Article";
import { useEffect, useState } from "react";
import "@/src/app/_lib/arrayUtils"

export default function Home() {
  const logoSize = { width: 512, height: 256 }
  const viewportSizeObj = useViewportSize()
  const [ articles, setArticles ] = useState<Article[]>([])
  useEffect(() => {
    api.get<Article[]>("/all-articles").then(fetched => {
      setArticles(fetched)
    })
  }, [])
  return (
    <>
      <FullScreenSection id="hero" className="flex-row text-center justify-center">
        <Brand size="xl" direction={viewportSizeObj.isAboveThreshold("lg") ? "horizontal" : "vertical"} />
      </FullScreenSection>
      <FullScreenSection className="bg-black align-center justify-center grid grid-cols-1 lg:grid-cols-12 lg:gap-20 w-full px-10 lg:px-30 2xl:px-50">
        <article className="lg:col-span-5 flex flex-col justify-center lg:pb-30">
          <Image src={"/imgs/pitagorici-logo.png"} className="mx-auto h-fit w-fit" alt="Pitagorici APS logo" width={logoSize.width} height={logoSize.height} />          
          <h3 className="text-3xl">
            Una &ldquo;congregazione&rdquo; <br /> <span className="text-5xl">Made in Pascal</span>
          </h3>
          <hr className="mb-8 mt-3"/>
          <div className="flex flex-col gap-3">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:ring-3 first-letter:p-2 first-letter:rounded "><strong>Notte Pitagorica</strong> — un progetto che parte dai banchi di scuola per generare un movimento di idee costruttivo e innovativo sulla matematica e sulla sua applicazione nella realtà di ogni giorno. </p>
            <p>L&apos;obiettivo è quello di <b>divulgare</b> la conoscenza scientifica in forma di spettacolo, unendo all’<b>indagine matematica</b> il fascino della <b>musica</b> e della <b>poesia</b>, suscitando nel pubblico quel senso di <b>stupore</b> che contraddistingue la <b>bellezza della scoperta</b>.</p>
            <p>Protagonisti di questo viaggio sono <b>studenti</b> ed <b>ex studenti</b> del nostro istituto che, dialogando con i <b>docenti</b>, affrontano con <b>passione</b> e <b>competenza</b> questioni scientifiche che riflettono la <b>complessità</b> del reale e le <b>sfide</b> della nostra contemporaneità.</p>
          </div>
        </article>
        <div className="lg:col-span-7 my-10 lg:my-auto" style={{ boxShadow: "20px 20px 0px white" }}>
          <RowsPhotoAlbum photos={[]}/>
        </div>
      </FullScreenSection>
      <FullScreenSection className="justify-center content-center">
        <h3 className="text-2xl text-center">
          — DICONO DI NOI — <br className="my-2" /> <span className="text-5xl">RASSEGNA STAMPA</span>
        </h3>

        <DailyCarousel articles={articles} className="pt-10 flex flex-col gap-2" />
      </FullScreenSection>
    </>
  );
}
