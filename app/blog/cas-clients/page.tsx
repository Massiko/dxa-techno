// app/cas-clients/page.tsx  (ou pages/cas-clients.tsx)
'use client'

import Image from 'next/image'
import { useState } from 'react'

type CaseStudy = {
  id: string
  title: string
  category: 'paiement' | 'fraude' | 'risque'
  logo: string
  challenge: string
  solution: string
  results: string
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'harmonie-mutuelle',
    title: 'Harmonie Mutuelle — Paiement en ligne & téléphone',
    category: 'paiement',
    logo: '/logos/harmonie-mutuelle.png',
    challenge:
      'Permettre à plus de 3 M d’adhérents de régler leurs cotisations et prestations facilement, en ligne ou par téléphone.',
    solution:
      'Mise en place d’un portail de paiement omnicanal, intégrant 3D Secure, workflows de validation et relances automatiques.',
    results:
      '+ 50 % de paiements dématérialisés • Réduction de 30 % des appels au centre de relation.',
  },
  {
    id: 'malakoff-humanis',
    title: 'Malakoff Humanis — Détection & traitement de la fraude',
    category: 'fraude',
    logo: '/logos/malakoff-humanis.png',
    challenge:
      'Lutter contre les fraudes aux prestations santé, en détectant règles métier non respectées et comportements suspects.',
    solution:
      'Développement d’un module de scoring temps réel, couplé à des règles évolutives et à un tableau de bord de pilotage.',
    results:
      'Détection anticipée de 85 % des dossiers suspects • Économies de 4 M€ la première année.',
  },
  {
    id: 'thelem-assurances',
    title: 'Thélem Assurances — Pilotage budgétaire pluriannuel',
    category: 'risque',
    logo: '/logos/thelem-assurances.png',
    challenge:
      'Garantir le respect des enveloppes budgétaires sur 5 ans pour l’ensemble des produits d’assurance auto et santé.',
    solution:
      'Conception d’un cockpit décisionnel, avec flux ETL vers un entrepôt de données et indicateurs SLA automatisés.',
    results:
      'Vision budgétaire consolidée à J+1 • Respect des budgets à 98 % sur le cycle suivant.',
  },
]

export default function CasClientsPage() {
  const [filter, setFilter] = useState<'all' | CaseStudy['category']>('all')

  const filtered =
    filter === 'all'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === filter)

  return (
    <main className="mt-16 max-w-7xl mx-auto px-4 py-16 space-y-12">
      {/* Intro */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Nos Cas Clients 
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Découvrez comment DXA Technologies accompagne ses partenaires du
          secteur assurantiel sur la modernisation des paiements, la lutte
          contre la fraude et le pilotage des risques.
        </p>
      </section>

      {/* Filtres */}
      <section className="flex justify-center gap-4">
        {[
          { key: 'all', label: 'Tous' },
          { key: 'paiement', label: 'Paiement' },
          { key: 'fraude', label: 'Fraude' },
          { key: 'risque', label: 'Risque' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key as any)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filter === key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </section>

      {/* Grille de cas */}
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <div className="h-32 relative bg-gray-50">
              <Image
                src={c.logo}
                alt={`Logo ${c.title}`}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold">{c.title}</h2>
              <p className="text-gray-700">
                <strong>Défi :</strong> {c.challenge}
              </p>
              <p className="text-gray-700">
                <strong>Solution :</strong> {c.solution}
              </p>
              <p className="text-green-600 font-bold">{c.results}</p>
              <a
                href={`/blog/cas-clients/${c.id}`}
                className="inline-block mt-4 text-indigo-600 hover:underline"
              >
                En savoir plus →
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
