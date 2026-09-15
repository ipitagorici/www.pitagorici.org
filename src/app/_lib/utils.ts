"use client"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString?: string): string {
  return new Date(dateString ?? new Date()).toLocaleDateString(undefined, { dateStyle: "long" })
}