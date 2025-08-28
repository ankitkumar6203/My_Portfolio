import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="container-p mx-auto text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} ankitmehta. All rights reserved.</p>
        <p className="text-slate-500">@ankitmehta</p>
      </div>
    </footer>
  )
}
