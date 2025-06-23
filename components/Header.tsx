'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Zap, 
  Network, 
  Code, 
  Building, 
  FileText, 
  Phone,
  Menu,
  X,
  ChevronDown
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Building,
      submenu: [
        { name: 'Expertise Réseaux', href: '/services/reseaux', icon: Network },
        { name: 'Architecture Logicielle', href: '/services/architecture', icon: Code },
        { name: 'Transformation Digitale', href: '/services/transformation', icon: Zap },
      ]
    },
    {
      name: 'Produits',
      href: '/produits',
      icon: Zap,
      badge: 'Marque déposée'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText,
      submenu: [
        { name: 'Cas Clients', href: '/blog/cas-clients' },
        { name: 'Analyses Tech', href: '/blog/analyses' },
        { name: 'Enjeux Technologiques', href: '/blog/enjeux' },
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ]

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/LOGO_DXA_V1.0-removebg-preview.png" 
              alt="DXA Technologies" 
              className="h-32 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600',
                    isScrolled ? 'text-slate-700' : 'text-slate-800'
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-800">
                      {item.badge}
                    </Badge>
                  )}
                  {item.submenu && (
                    <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors"
                        >
                          {subItem.icon && <subItem.icon className="w-4 h-4 text-slate-400" />}
                          <span className="text-sm text-slate-700">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/devis">
              <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Devis gratuit
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
            <div className="p-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 py-2 text-slate-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-7 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-1 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link href="/devis" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600">
                    Devis gratuit
                  </Button>
                </Link>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}