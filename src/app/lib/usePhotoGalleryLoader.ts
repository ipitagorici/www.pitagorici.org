"use client"
import { useEffect, useState } from "react"
import { GalleryPhoto } from "../types/GalleryPhoto"
import { avg, getImageMetadata } from "./utils"

const DEFAULT_TARGET_ROW_HEIGHT = 500

export function usePhotoGalleryLoader(srcSet: string[], inputTargetRowHeight: number = DEFAULT_TARGET_ROW_HEIGHT) {
    const [photos, setPhotos] = useState<readonly GalleryPhoto[]>([])
    const [targetRowHeight, setTargetRowHeight] = useState<number>()
    useEffect(() => {
        Promise.all(srcSet.map(src => new Promise((
            resolve: (photo: GalleryPhoto) => void,
            reject: (reason: string) => void
        ) => {
            getImageMetadata(src, (error, img) => {
                if (error) {
                    reject("Cannot load image " + src + "!")
                }
                resolve({ src, width: img.width, height: img.height })
            })
        }))).then(loadedPhotos => { 
            setPhotos(loadedPhotos as readonly GalleryPhoto[])
            setTargetRowHeight(
                Math.min(
                    inputTargetRowHeight,
                    Math.floor(avg(...loadedPhotos.map(photo => photo.height)))
                )
            ) 
        })
    }, [])
    return { photos, targetRowHeight }
}