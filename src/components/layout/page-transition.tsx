"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  return (
    <main key={pathname} className="page-transition flex-grow">
      {children}
    </main>
  )
}
