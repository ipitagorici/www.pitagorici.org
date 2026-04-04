import { NextRequest } from "next/server";

const protectedRoute = [ "/dashboard" ]
export function proxy(request: NextRequest) {
    const requiredPath = request.nextUrl.pathname
    const isProtectedRoute = protectedRoute.includes(requiredPath)
}