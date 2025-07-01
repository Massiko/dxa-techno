// app/enjeux-tech/page.tsx
'use client'

import Image from 'next/image'
import { motion } from '@/lib/motions'

const ENJEUX = [
  {
    id: 'biometrie',
    title: 'Biométrie & Authentification',
    icon: '/icons/biometrie.svg',
    description:
      'Remplacer ou renforcer le couple login-mot de passe par la reconnaissance faciale, digitale ou vocale, tout en garantissant la vie privée et la conformité RGPD.',
  },
  {
    id: 'fraude',
    title: 'Détection de la fraude en temps réel',
    icon: '/icons/fraude.svg',
    description:
      'Identifier immédiatement les comportements suspects (bots, usurpation, transactions frauduleuses) grâce à du scoring comportemental et du machine learning embarqué.',
  },
  {
    id: 'donnees',
    title: 'Protection des données personnelles',
    icon: '/icons/donnees.svg',
    description:
      'Chiffrer les données sensibles, gérer les droits d’accès et assurer la traçabilité pour répondre aux exigences légales et aux attentes des utilisateurs.',
  },
]

export default function EnjeuxTechPage() {
  return (
      <main className="mt-16 max-w-7xl mx-auto px-4 py-16 space-y-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <h1 className="text-5xl font-extrabold text-indigo-900">
          Nos Enjeux Technologiques
        </h1>
        <p className="mt-4 text-lg text-indigo-700 max-w-2xl mx-auto">
          Entre biométrie, fraude et protection des données, découvrez les
          challenges que DXA Technologies relève au quotidien pour nos clients.
        </p>
      </motion.section>

      {/* Cards */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {ENJEUX.map((e, idx) => (
          <motion.article
            key={e.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
            className="relative bg-white rounded-2xl overflow-hidden p-6 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-20 h-20 mb-4">
              <Image
                src={e.icon}
                alt={e.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold text-indigo-900 mb-2">
              {e.title}
            </h2>
            <p className="text-indigo-700 text-sm">{e.description}</p>
          </motion.article>
        ))}
      </motion.section>
    </main>
  )
}
