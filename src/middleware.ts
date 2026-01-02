import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { LAUNCH_DATE } from './config/launch'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const currentDate = new Date()
  const isBeforeLaunch = currentDate < LAUNCH_DATE

  // Routes that should always be accessible (bypass coming-soon redirect)
  // Note: /login and /register are NOT allowed before launch
  const allowedRoutes = ['/coming-soon', '/api', '/_next', '/favicon.ico']

  // Check if current path is in allowed routes
  const isAllowedRoute = allowedRoutes.some((route) => pathname.startsWith(route))

  // If before launch date
  if (isBeforeLaunch) {
    // If trying to access main site (not on allowed routes), redirect to coming-soon
    if (!isAllowedRoute && pathname !== '/coming-soon') {
      const url = request.nextUrl.clone()
      url.pathname = '/coming-soon'
      return NextResponse.redirect(url)
    }
  } else {
    // If after launch date
    // If on coming-soon page, redirect to home
    if (pathname === '/coming-soon') {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
