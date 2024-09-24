import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth-token'); // Pobieramy token z ciasteczek

  // Sprawdzamy, czy użytkownik ma dostęp do panelu admina
  if (!token && req.nextUrl.pathname.startsWith('/adminpanel')) {
    return NextResponse.redirect(new URL('/adminlogin', req.url)); // Jeśli nie ma tokena, przekieruj do logowania
  }

  return NextResponse.next(); // Jeśli jest token, przepuść dalej
}

// Middleware działa tylko na ścieżkach zaczynających się od '/adminpanel'
export const config = {
  matcher: ['/adminpanel/:path*'],
};
