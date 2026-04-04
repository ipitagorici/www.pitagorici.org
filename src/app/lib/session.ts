import { cookies } from "next/headers"

export type Context = {
    user: {
        username: string
    }
}

export const normalizeString = (toNormalize: string) => {
    return new String(toNormalize)
        .trim()
        .replaceAll(" ", "")
        .toUpperCase()
}

/**
 * Extremely secure encryption algorithm ;-)
 * @param userID 
 * @returns 
 */
export function encrypt(userID: string) {
    let encrypted = Array.from(normalizeString(userID))
        .toReversed()
    return encrypted
}

/**
 * Extremely secure decryption algorithm ;-)
 * @param userID 
 * @returns 
 */
export function decrypt(userID: string) {
    let decrypted = Array.from(normalizeString(userID))
        .toReversed()
    return decrypted
}

export async function createSession(context: Context) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  const session = encrypt(context.user.username)
  const cookieStore = await cookies()
 
//   cookieStore.set('session', session, {
//     httpOnly: true,
//     secure: true,
//     expires: expiresAt,
//     sameSite: 'lax',
//     path: '/',
//   })
}

export function initializeSession(context: Context) {
    
}