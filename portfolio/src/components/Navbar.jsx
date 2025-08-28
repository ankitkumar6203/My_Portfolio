import React, { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-slate-950/80 border-b border-slate-200/60 dark:border-slate-800">
      <div className="container-p mx-auto flex items-center justify-between h-16">
        <a href="#home" className="font-extrabold text-xl">My<span className="text-sky-600">Portfolio</span></a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-sky-600 transition-colors">{l.label}</a>
          ))}
          <button aria-label="Toggle dark mode" onClick={() => setDark(d => !d)} className="rounded-xl p-2 border border-slate-200 dark:border-slate-800 hover:shadow">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <button className="md:hidden rounded-xl p-2 border border-slate-200 dark:border-slate-800" onClick={() => setOpen(o => !o)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} className="block py-2 border-b border-slate-200 dark:border-slate-800">{l.label}</a>
          ))}
          <button onClick={() => setDark(d => !d)} className="mt-2 inline-flex items-center gap-2 rounded-xl px-3 py-2 border border-slate-200 dark:border-slate-800">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
            <span>Toggle Theme</span>
          </button>
        </div>
      )}
    </header>
  )
}
