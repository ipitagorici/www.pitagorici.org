"use client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

declare global {
  interface Array<T> {
  /**
    * Divides an array in `partitions` parts.
    * 
    * Ex:
    * 
    * ```js
    * let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3]
    * arr.partition(3) // [[1,1,1], [2,2,2], [3,3,3]]
    * 
    * let arr = [1, 1, 1, 2, 2, 2, 3, 3]
    * arr.partition(3) // [[1,1,1], [2,2,2], [3,3]]
    * ```
    * 
    * @param partitions the number of partitions required
    * @returns the divided array
    */
    partition(partitions: number): T[][];
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

Array.prototype.partition = function <T>(this: T[], partitions: number): T[][] {
  const result: T[][] = []
  let newPart: T[] = []
  const chunkSize = Math.ceil(this.length / partitions);
  this.forEach((el) => {
    newPart.push(el)
    if (newPart.length === chunkSize) {
      result.push(newPart);
      newPart = [];
    }
  })
  // If the last part did not get pushed, add it to the result
  if (newPart.length > 0) {
    result.push(newPart)
  }
  return result
};

export function getImageMetadata(url: string, callback: (error: null | string | Event, image: HTMLImageElement) => any) {
  const img: HTMLImageElement = new Image();
  img.onload = () => callback(null, img);
  img.onerror = (error) => callback(error, new Image());
  img.src = url;
}

/**
 * Computes the sum of a list of values
 * @param values the values to read
 * @returns their sum
 */
export function sum(...values: number[]): number {
  let total: number = 0
  values.forEach(val => total += val)
  return total
}

/**
 * Computes the average among a list of values
 * @param values the values to read
 * @returns their average
 */
export function avg(...values: number[]): number {
  return sum(...values) / values.length
}