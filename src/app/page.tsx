import FullScreenSection from "./ui/components/FullScreenSection";
import Grainient from "./ui/background/Grainient";

export default function Home() {
  return (
    <>
      <Grainient className="-z-10 fixed top-0 right-0 left-0"
        color1="#00052d"
        color2="#4a4131"
        color3="#bb5c6c"
        timeSpeed={1.1}
        colorBalance={0.4}
        warpStrength={0}
        warpFrequency={11}
        warpSpeed={2}
        warpAmplitude={70}
        blendAngle={0}
        blendSoftness={0.3}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1.45}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <main className="flex-1">
        <FullScreenSection id="hero" className="text-center align-center justify-center">
          <h1 className="text-3xl md:text-5xl lg:text-8xl uppercase">Pitagorici APS</h1>
          <p className="text-md md:text-lg lg:text-3xl">Errare humanum est, perseverare... pythagoricum!</p>
        </FullScreenSection>
        <FullScreenSection className="align-center justify-center grid grid-cols-1 lg:grid-cols-12 lg:gap-10 w-[75%] mx-auto">
          <article className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-3xl">
              Una "congregazione" <br/> <span className="text-5xl">Made in Pascal</span>
            </h3>
            <hr className="mb-8 mt-3"/>
            <div className="flex flex-col gap-3">
              <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:ring-3 first-letter:p-2 first-letter:rounded "><strong>Notte Pitagorica</strong> — un progetto che parte dai banchi di scuola per generare un movimento di idee costruttivo e innovativo sulla matematica e sulla sua applicazione nella realtà di ogni giorno. </p>
              <p>L'obiettivo è quello di divulgare la conoscenza scientifica in forma di spettacolo, unendo all’indagine matematica il fascino della musica e della poesia, suscitando nel pubblico quel senso di stupore che contraddistingue la bellezza della scoperta.</p>
              <p> Protagonisti di questo viaggio sono studenti ed ex studenti del nostro istituto che, dialogando con i docenti, affrontano con passione e competenza questioni scientifiche che riflettono la complessità del reale e le sfide della nostra contemporaneità.</p>
            </div>
          </article>
          <div className="lg:col-span-7 bg-black rounded-lg shadow-lg">

          </div>
        </FullScreenSection>
        <section className="min-h-[100dvh]" id="rassegne">
          <h2>Errare humanum est, perseverare... pythagoricum!</h2>
          <h1>Pitagorici APS</h1>
        </section>
      </main>
    </>
  );
}
