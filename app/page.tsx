'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Network, 
  Code, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Shield, 
  Users,
  Star,
  TrendingUp,
  Award,
  Target,
  Lightbulb,
  Building,
  Cpu,
  Cloud,
  Database
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'

const SERVICES = [
  {
    icon: Network,
    title: "Expertise Réseaux",
    description: "Architecture et optimisation d'infrastructures réseau haute performance",
    features: ["Conception réseau", "Sécurité avancée", "Monitoring 24/7", "Optimisation performance"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Code,
    title: "Architecture Logicielle",
    description: "Conception et développement de solutions logicielles sur mesure",
    features: ["Microservices", "Cloud Native", "DevOps", "Architecture scalable"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Transformation Digitale",
    description: "Accompagnement stratégique pour votre évolution numérique",
    features: ["Audit digital", "Stratégie SI", "Conduite du changement", "Formation équipes"],
    color: "from-orange-500 to-red-500"
  }
]

const STATS = [
  { value: "150+", label: "Projets réalisés", icon: Target },
  { value: "50+", label: "Clients satisfaits", icon: Users },
  { value: "98%", label: "Taux de satisfaction", icon: Star },
  { value: "24/7", label: "Support technique", icon: Shield }
]

const TECHNOLOGIES = [
  { name: "Cloud Computing", icon: Cloud, category: "Infrastructure" },
  { name: "Kubernetes", icon: Cpu, category: "Orchestration" },
  { name: "Microservices", icon: Network, category: "Architecture" },
  { name: "DevOps", icon: Code, category: "Développement" },
  { name: "Cybersécurité", icon: Shield, category: "Sécurité" },
  { name: "Big Data", icon: Database, category: "Données" }
]

const RECENT_PROJECTS = [
  {
    title: "Modernisation SI Bancaire",
    client: "Banque Européenne",
    category: "Architecture Logicielle",
    description: "Migration complète vers une architecture microservices cloud-native",
    technologies: ["Kubernetes", "Spring Boot", "PostgreSQL", "Redis"],
    impact: "40% d'amélioration des performances"
  },
  {
    title: "Infrastructure Réseau Hybride",
    client: "Groupe Industriel",
    category: "Expertise Réseaux",
    description: "Déploiement d'une infrastructure réseau hybride multi-sites",
    technologies: ["SD-WAN", "Cisco", "Azure", "Fortinet"],
    impact: "60% de réduction des coûts réseau"
  },
  {
    title: "Transformation Digitale Retail",
    client: "Chaîne de Distribution",
    category: "Transformation Digitale",
    description: "Digitalisation complète des processus métier et formation des équipes",
    technologies: ["Salesforce", "Power BI", "Azure AD", "Teams"],
    impact: "25% d'augmentation de productivité"
  }
]

export default function Home() {
  const [activeService, setActiveService] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl" />
        <div className="relative container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              🚀 Pionnier d'une technologie propre et humanisée
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                DXA Technologies
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-700 mb-4 font-medium">
              Son rêve faire que le vôtre soit à portée de main
            </p>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Nous construisons des ponts d'opportunité technologique avec une ambition : 
              devenir pionnier d'une technologie propre, humanisée et porteuse de souveraineté.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <Button size="lg" className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700">
                  <Target className="w-5 h-5 mr-2" />
                  Démarrer votre projet
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Lightbulb className="w-5 h-5 mr-2" />
                  Découvrir nos expertises
                </Button>
              </Link>
            </div>

            {/* Technologies showcase */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {TECHNOLOGIES.map((tech, index) => (
                <div
                  key={tech.name}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-4 hover:bg-white/80 transition-all duration-300 hover:scale-105"
                >
                  <tech.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-slate-700">{tech.name}</p>
                  <p className="text-xs text-slate-500">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nos Expertises
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Trois domaines d'excellence pour transformer votre reve en réalité
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <Card 
                key={index} 
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  activeService === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActiveService(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 px-4 bg-slate-50/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Projets Récents</h2>
              <p className="text-slate-600">Découvrez nos dernières réalisations et leur impact</p>
            </div>
            <Link href="/blog">
              <Button variant="outline" className="group">
                Voir tous les projets
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {RECENT_PROJECTS.map((project, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader className="pb-3">
                  <Badge variant="secondary" className="w-fit mb-2">
                    {project.category}
                  </Badge>
                  <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-slate-500">
                    {project.client}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-slate-700 mb-2">Technologies :</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">{project.impact}</span>
                    </div>
                    <Button size="sm" variant="ghost">
                      Lire l'étude de cas
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                Notre Mission
              </h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Construire des ponts d'opportunité technologique pour connecter 
                vos ambitions à la réalité du terrain.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Technologie Propre</h3>
                    <p className="text-slate-600 text-sm">Solutions durables et respectueuses de l'environnement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Approche Humanisée</h3>
                    <p className="text-slate-600 text-sm">L'humain au centre de chaque transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Souveraineté Technologique</h3>
                    <p className="text-slate-600 text-sm">Indépendance et maîtrise de vos outils numériques</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-800">Notre Vision</h3>
                </div>
                <blockquote className="text-lg text-slate-600 italic text-center leading-relaxed">
                  "Devenir le pionnier d'une technologie qui respecte l'humain, 
                  préserve l'environnement et renforce la souveraineté numérique."
                </blockquote>
                <div className="mt-6 text-center">
                  <p className="text-sm text-slate-500">— Équipe DXA Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produits DXA */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
              🏷️ Marque Déposée DXA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Nos Produits Technologiques
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Solutions propriétaires développées par nos équipes pour répondre aux défis technologiques actuels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">DXA NetGuard</CardTitle>
                <CardDescription>
                  Solution de sécurité réseau intelligente avec IA intégrée
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Détection d'intrusion en temps réel</li>
                  <li>• Analyse comportementale avancée</li>
                  <li>• Réponse automatique aux menaces</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">DXA CloudBuilder</CardTitle>
                <CardDescription>
                  Plateforme de développement cloud-native low-code
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Déploiement automatisé</li>
                  <li>• Scaling intelligent</li>
                  <li>• Monitoring intégré</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">DXA Transform</CardTitle>
                <CardDescription>
                  Suite d'outils pour la transformation digitale agile
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Audit automatisé des SI</li>
                  <li>• Roadmap personnalisée</li>
                  <li>• Suivi de performance</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Transformer Votre Vision en Réalité ?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Rejoignez les entreprises qui font confiance à DXA Technologies pour leur transformation digitale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="px-8">
                <Target className="w-5 h-5 mr-2" />
                Démarrer un projet
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="px-8 text-white border-white hover:bg-white hover:text-blue-600">
                <Building className="w-5 h-5 mr-2" />
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="/LOGO_DXA_V1.0-removebg-preview.png" 
                  alt="DXA Technologies" 
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-slate-400 mb-4">
                Construire des ponts d'opportunité technologique pour un avenir numérique souverain
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-xs">Li</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-xs">Tw</span>
                </div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <span className="text-xs">Gh</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/services/reseaux" className="hover:text-white transition-colors">Expertise Réseaux</Link></li>
                <li><Link href="/services/architecture" className="hover:text-white transition-colors">Architecture Logicielle</Link></li>
                <li><Link href="/services/transformation" className="hover:text-white transition-colors">Transformation Digitale</Link></li>
                <li><Link href="/services/conseil" className="hover:text-white transition-colors">Conseil SI</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produits</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/produits/netguard" className="hover:text-white transition-colors">DXA NetGuard</Link></li>
                <li><Link href="/produits/cloudbuilder" className="hover:text-white transition-colors">DXA CloudBuilder</Link></li>
                <li><Link href="/produits/transform" className="hover:text-white transition-colors">DXA Transform</Link></li>
                <li><Link href="/produits" className="hover:text-white transition-colors">Tous nos produits</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Analyses</Link></li>
                <li><Link href="/cas-clients" className="hover:text-white transition-colors">Cas Clients</Link></li>
                <li><Link href="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 DXA Technologies. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link href="/confidentialite" className="hover:text-white transition-colors">Confidentialité</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}