import React, { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = `mailto:ankitmehta78816@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`

  return (
    <section id="contact" className="container-p mx-auto py-16">
      <h2 className="text-3xl md:text-4xl font-bold">Contact</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Got a project or a question? Let’s talk.</p>

      <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} rows="5" className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" placeholder="How can I help?" />
        </div>
        <div className="flex gap-3">
          <a href={mailto} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 text-white">
            <Send size={16}/> Send Email
          </a>
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700">
            <Mail size={16}/> Open Mail App
          </a>
        </div>
      </form>
    </section>
  )
}
