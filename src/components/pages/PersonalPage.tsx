'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Bike, Crosshair, Footprints, ImageIcon, Sparkles } from 'lucide-react';

const cardItems = [
  {
    title: 'Running',
    icon: Footprints,
    image: '/fig/running.jpg',
    imageAlt: 'Running',
    body: 'Running clears my head and keeps me grounded. I enjoy the solitude of long runs, the rhythm of steady miles, and the sense of progress, one step at a time.',
    tags: ['Endurance', 'Discipline', 'Freedom', 'Growth'],
    tone: 'amber',
  },
  {
    title: 'Cycling',
    icon: Bike,
    image: '',
    imageAlt: 'Cycling',
    body: 'Cycling is my way to explore, breathe deeply, and see the world from a different pace. There is nothing like a good ride on a clear day with great views.',
    tags: ['Adventure', 'Focus', 'Exploration', 'Views'],
    tone: 'slate',
  },
  {
    title: 'CS2',
    icon: Crosshair,
    image: '/fig/cs.png',
    imageAlt: 'CS2',
    body: 'I enjoy the strategy, teamwork, and precision that CS2 brings. It is where quick decisions and calm minds make the difference.',
    tags: ['Strategy', 'Teamwork', 'Focus', 'Intensity'],
    tone: 'rose',
    callout: 'Favorite team: FaZe Clan',
  },
];

const toneClasses = {
  amber: 'bg-amber-100 text-primary',
  slate: 'bg-slate-200 text-primary',
  rose: 'bg-rose-100 text-primary',
};

export default function PersonalPage() {
  return (
    <div className="relative -mx-4 -my-12 min-h-screen overflow-hidden bg-[#fffaf2] px-4 py-12 text-primary sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(212,165,98,0.12),transparent_28%),radial-gradient(circle_at_88%_24%,rgba(30,41,59,0.08),transparent_24%)]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 py-6 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <h1 className="font-serif text-6xl font-bold leading-none text-primary sm:text-7xl lg:text-8xl">
                Personal
              </h1>
              <Sparkles className="h-7 w-7 text-accent" aria-hidden="true" />
            </div>
            <div className="mb-8 h-1 w-52 rounded-full bg-gradient-to-r from-accent via-accent-light to-transparent" />

            <blockquote className="relative max-w-xl font-serif text-2xl italic leading-snug text-primary sm:text-3xl">
              <span className="absolute -left-7 -top-2 text-5xl not-italic text-accent/80">“</span>
              Balance is not something you find,
              <br />
              it&apos;s something you build.
              <span className="ml-2 text-5xl not-italic text-accent/80">”</span>
            </blockquote>

            <p className="mt-9 max-w-lg text-base leading-8 text-primary/85">
              Outside of research and coding, I love staying active, challenging myself,
              and enjoying the small moments that make life meaningful.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-7 -top-6 h-12 w-28 rotate-[-18deg] rounded-sm bg-accent/20 shadow-sm" />
            <div className="relative rounded-[1.5rem] border border-white/80 bg-white p-3 shadow-2xl">
              <Image
                src="/fig/main.png"
                alt="Mountain lake at sunset"
                width={900}
                height={640}
                priority
                className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
              />
            </div>
          </div>
        </motion.section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {cardItems.map((item, index) => {
            const Icon = item.icon;
            const tone = toneClasses[item.tone as keyof typeof toneClasses];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 * index }}
                className="rounded-xl border border-accent/20 bg-white/72 p-5 shadow-sm backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full ${tone}`}>
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold leading-none text-primary">{item.title}</h2>
                      <div className="mt-2 h-0.5 w-20 rounded-full bg-accent" />
                    </div>
                  </div>
                  <Sparkles className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>

                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={640}
                    height={400}
                    className="aspect-[1.55/1] w-full rounded-xl border border-accent/15 object-cover shadow-inner"
                  />
                ) : (
                  <div className="flex aspect-[1.55/1] w-full flex-col items-center justify-center rounded-xl border border-dashed border-accent/25 bg-[#f7f0e7]/70 text-primary/35">
                    <ImageIcon className="mb-2 h-16 w-16" aria-hidden="true" />
                    <span className="text-sm">Your photo here</span>
                  </div>
                )}

                <p className="mt-5 min-h-28 text-sm leading-6 text-primary/85">{item.body}</p>

                {item.callout && (
                  <div className="mt-4 rounded-lg bg-[#f5efe7] px-4 py-3 text-sm text-primary">
                    {item.callout}
                  </div>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#f1eadf] px-3 py-1.5 text-xs font-medium text-primary/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
