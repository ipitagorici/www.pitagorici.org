"use client"
import FullScreenSection from "../ui/components/FullScreenSection";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { usePhotoGalleryLoader } from "../lib/usePhotoGalleryLoader";

export default function AboutUs() {
    const PHOTOS_QTY = 5
    const { photos, targetRowHeight } = usePhotoGalleryLoader(Array
        .from({ length: PHOTOS_QTY }, (_, i) => i + 1)
        .map(photoNr => `/imgs/groups/g${photoNr}.jpg`))
    
    return <FullScreenSection className="w-[75%] mx-auto mt-20">
        <h1 className="text-5xl mb-10">La squadra</h1>
        <RowsPhotoAlbum targetRowHeight={targetRowHeight} photos={photos}/>
        <h2 className="text-2xl my-10">Hanno creduto in noi</h2>
        // CARRELLATA SPONSOR
    </FullScreenSection>
}