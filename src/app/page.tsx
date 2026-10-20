"use client";

import { FormEvent, useState } from "react";

type GuestbookMessage = {
  id: number;
  name: string;
  message: string;
  date: string;
};

const initialMessages: GuestbookMessage[] = [
  {
    id: 1,
    name: "Elif Yılmaz",
    message: "Yeni projelerinde başarılar Sevde! Burayı takip etmek çok keyifli olacak.",
    date: "18 Ekim 2026",
  },
  {
    id: 2,
    name: "Mert Kaya",
    message: "Sade ve çok hoş bir başlangıç olmuş. Ellerine sağlık!",
    date: "17 Ekim 2026",
  },
  {
    id: 3,
    name: "Zeynep Aksoy",
    message: "Yapay zekâ yolculuğunda bol keşifli ve üretken günler dilerim.",
    date: "15 Ekim 2026",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.48 8.6 8.6 0 0 1-3.72-.97L4 19l1.04-3.46A7.5 7.5 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [messages, setMessages] = useState(initialMessages);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanMessage) return;

    setMessages((currentMessages) => [
      {
        id: Date.now(),
        name: cleanName,
        message: cleanMessage,
        date: new Intl.DateTimeFormat("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date()),
      },
      ...currentMessages,
    ]);

    setName("");
    setMessage("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_22%_8%,rgba(139,92,246,0.15),transparent_34%),radial-gradient(circle_at_80%_2%,rgba(34,211,238,0.08),transparent_28%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <header className="mb-16 sm:mb-24">
          <div className="mb-16 flex items-center justify-between sm:mb-24">
            <a href="#" className="group flex items-center gap-3" aria-label="Sevde ana sayfa">
              <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-400/30 bg-violet-400/10 text-sm font-semibold text-violet-200 transition-colors group-hover:bg-violet-400/15">S</span>
              <span className="text-sm font-medium tracking-wide text-slate-300">sevde.dev</span>
            </a>
            <a href="#guestbook" className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-violet-400/40 hover:text-white">Mesaj bırak</a>
          </div>

          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3 text-sm font-medium text-violet-300">
              <span className="h-px w-8 bg-violet-400/70" />
              Tanıştığımıza memnun oldum
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Merhaba, ben Sevde <span className="inline-block origin-bottom-right">👋</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-slate-400 sm:text-lg sm:leading-9">
              Acıbadem Üniversitesi Bilgisayar Mühendisliği öğrencisiyim. Yazılım geliştirme, veri bilimi ve yapay zekâ alanlarıyla ilgileniyorum. Yeni teknolojiler öğrenmeyi ve projeler geliştirmeyi seviyorum.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5" aria-label="İlgi alanları">
              {["Yazılım geliştirme", "Veri bilimi", "Yapay zekâ"].map((interest) => (
                <span key={interest} className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-400">{interest}</span>
              ))}
            </div>
          </div>
        </header>

        <section id="guestbook" className="scroll-mt-8 border-t border-white/[0.08] pt-12 sm:pt-16">
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium text-violet-300">Bir iz bırak</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">Ziyaretçi Defteri</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-500">Merhaba demek, düşüncelerini paylaşmak ya da sadece uğradığını söylemek için kısa bir mesaj bırak.</p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 shadow-2xl shadow-black/20 sm:p-7">
              <div className="mb-7 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-300"><MessageIcon /></span>
                <div>
                  <h3 className="font-semibold text-white">Mesajını yaz</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Tüm alanlar zorunludur.</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">İsmin</label>
                  <input id="name" name="name" type="text" autoComplete="name" required maxLength={50} value={name} onChange={(event) => setName(event.target.value)} placeholder="Adını yaz" className="field" />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300">Mesajın</label>
                    <span className="text-xs tabular-nums text-slate-600">{message.length}/280</span>
                  </div>
                  <textarea id="message" name="message" required maxLength={280} rows={5} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Birkaç güzel söz bırak..." className="field min-h-32 resize-y" />
                </div>
                <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition-colors hover:bg-violet-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400 active:bg-violet-600">
                  Mesaj Gönder <ArrowIcon />
                </button>
              </div>
            </form>

            <div>
              <div className="mb-4 flex items-center justify-between px-1">
                <h3 className="text-sm font-medium text-slate-300">Son mesajlar</h3>
                <span className="rounded-full bg-white/[0.05] px-2.5 py-1 text-xs text-slate-500">{messages.length} mesaj</span>
              </div>
              <div className="space-y-3" aria-live="polite">
                {messages.map((item) => (
                  <article key={item.id} className="message-card rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/[0.08] bg-slate-800 text-sm font-semibold text-violet-200">{item.name.charAt(0).toLocaleUpperCase("tr-TR")}</div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="truncate text-sm font-semibold text-slate-100">{item.name}</h4>
                          <time className="text-xs text-slate-600">{item.date}</time>
                        </div>
                        <p className="break-words text-sm leading-6 text-slate-400">{item.message}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/[0.06] pt-7 text-sm text-slate-600 sm:mt-28">
          <p>Sevde tarafından merak ve özenle geliştirildi.</p>
        </footer>
      </div>
    </main>
  );
}
