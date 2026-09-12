import { NextRequest } from "next/server"

const protectedRoutes = [ "/dashboard" ]
export function proxy(request: NextRequest) {
  const requiredPath = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(requiredPath)
  console.log("hi!")
}
