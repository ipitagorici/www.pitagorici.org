"use client"
import FullScreenSection from "../components/FullScreenSection";
import Image from "next/image";
import Brand from "../components/Brand";
import DailyCarousel from "../components/DailyCarousel";
import useViewportSize from "../lib/useViewportSize";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { usePhotoGalleryLoader } from "../lib/usePhotoGalleryLoader";

export default function Home() {
  const pascalLogoDimension = {
    width: 460,
    height: 270
  }
  const divider = 2.2;
  const viewportSizeObj = useViewportSize()
  const { photos, targetRowHeight } = usePhotoGalleryLoader(Array
        .from({ length: 5 }, (_, i) => i + 1)
        .map(photoNr => `/imgs/groups/g${photoNr}.jpg`), 300)
  return (
    <>
      <FullScreenSection id="hero" className="flex-row text-center justify-center">
        <Brand size="xl" direction={viewportSizeObj.isAboveThreshold("lg") ? "horizontal" : "vertical"} />
      </FullScreenSection>
      <FullScreenSection className="align-center justify-center grid grid-cols-1 lg:grid-cols-12 lg:gap-20 w-full px-10 lg:px-30 2xl:px-50">
        <article className="lg:col-span-5 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row items-center md:justify-center">
            <Image src={"/imgs/pascal-white-logo-no-bg.png"} className="m-auto h-fit" alt="ITT Pascal Logo" width={pascalLogoDimension.width / divider} height={pascalLogoDimension.height / divider} />
            <h5 className="pt-5 md:py-0 text-3xl my-auto">X</h5>
            <Image src={"/imgs/pitagorici-logo.png"} className="mx-auto h-fit" alt="ITT Pascal Logo" width={pascalLogoDimension.width / divider} height={pascalLogoDimension.height / divider} />
          </div>
          <h3 className="text-3xl">
            Una &ldquo;congregazione&rdquo; <br /> <span className="text-5xl">Made in Pascal</span>
          </h3>
          <hr className="mb-8 mt-3" />
          <div className="flex flex-col gap-3">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:ring-3 first-letter:p-2 first-letter:rounded "><strong>Notte Pitagorica</strong> — un progetto che parte dai banchi di scuola per generare un movimento di idee costruttivo e innovativo sulla matematica e sulla sua applicazione nella realtà di ogni giorno. </p>
            <p>L&sdquo;obiettivo è quello di <b>divulgare</b> la conoscenza scientifica in forma di spettacolo, unendo all’<b>indagine matematica</b> il fascino della <b>musica</b> e della <b>poesia</b>, suscitando nel pubblico quel senso di <b>stupore</b> che contraddistingue la <b>bellezza della scoperta</b>.</p>
            <p>Protagonisti di questo viaggio sono <b>studenti</b> ed <b>ex studenti</b> del nostro istituto che, dialogando con i <b>docenti</b>, affrontano con <b>passione</b> e <b>competenza</b> questioni scientifiche che riflettono la <b>complessità</b> del reale e le <b>sfide</b> della nostra contemporaneità.</p>
          </div>
        </article>
        <div className="lg:col-span-7 bg-black my-10 lg:my-auto" style={{ boxShadow: "20px 20px 0px black" }}>
          <RowsPhotoAlbum targetRowHeight={targetRowHeight} photos={photos}/>
        </div>
      </FullScreenSection>
      <FullScreenSection className="justify-center content-center">
        <h3 className="text-2xl text-center">
          — DICONO DI NOI — <br className="my-2" /> <span className="text-5xl">RASSEGNA STAMPA</span>
        </h3>
        <DailyCarousel className="pt-10 flex flex-col gap-2" />
      </FullScreenSection>
    </>
  );
}
