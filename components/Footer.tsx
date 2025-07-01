'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & phrase */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/LOGO_DXA_V1.0-removebg-preview.png"
                alt="DXA Technologies"
                width={128}
                height={128}
                className="h-32 w-auto"
                priority
              />
            </div>
            <p className="text-slate-400 mb-4">
              Construire des ponts d&apos;opportunité technologique pour un avenir numérique souverain
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" aria-label="LinkedIn" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-xs font-bold">Li</span>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-xs font-bold">Tw</span>
              </Link>
              <Link href="https://github.com" aria-label="GitHub" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <span className="text-xs font-bold">Gh</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/services/reseaux" className="hover:text-white transition-colors">
                  Expertise Réseaux
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="hover:text-white transition-colors">
                  Architecture Logicielle
                </Link>
              </li>
              <li>
                <Link href="/services/transformation" className="hover:text-white transition-colors">
                  Transformation Digitale
                </Link>
              </li>
              <li>
                <Link href="/services/conseil" className="hover:text-white transition-colors">
                  Conseil SI
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog & Analyses
                </Link>
              </li>
              <li>
                <Link href="/cas-clients" className="hover:text-white transition-colors">
                  Cas Clients
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Téléphone : +1 630 422 07 83</li>
              <li>Email : <Link href="mailto:contact@dxatech.com" className="hover:text-white transition-colors">contact@dxatech.com</Link></li>
              <li>Adresse : 8113, Route 53, Unit2 Woodridge, 60517</li>
            </ul>
          </div>
        </div>

        {/* Bas de page */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} DXA Technologies. Tous droits réservés.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
