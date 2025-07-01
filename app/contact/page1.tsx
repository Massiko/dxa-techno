'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Network,
  Code,
  Zap,
  Building,
  Users,
  Calendar,
  MessageCircle,
  Linkedin,
  Twitter,
  Github
} from 'lucide-react'
import Header from '@/components/Header'

const SERVICES = [
  { value: 'reseaux', label: 'Expertise Réseaux', icon: Network },
  { value: 'architecture', label: 'Architecture Logicielle', icon: Code },
  { value: 'transformation', label: 'Transformation Digitale', icon: Zap },
  { value: 'conseil', label: 'Conseil SI', icon: Building },
  { value: 'autre', label: 'Autre demande', icon: MessageCircle }
]

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Téléphone",
    value: "+242 06 972 13 57/+242 06 505 87 81",
    description: "Lun-Ven 9h-18h"
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@dxa-techno.com",
    description: "Réponse sous 24h"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "46 Rue OTARI",
    description: "Brazzaville, Congo"
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "9h00 - 18h00",
    description: "Du lundi au vendredi"
  }
]

const TEAM_MEMBERS = [
  {
    name: "Hilaire OKEMBA",
    role: "Associé, suivi de Mission",
    expertise: "Architecture Logicielle ",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    linkedin: "#"
  },
  {
    name: "Davy IBOVI",
    role: "Associé, Gerant",
    expertise: "Commerce, Architecture Reseaux et Communication",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    linkedin: "#"
  },
  {
    name: "Benoit IBOVI",
    role: "Associé, Gérant",
    expertise: "Change Management, DevOps, Produits",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
    linkedin: "#"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Créer un objet avec les données du formulaire et un timestamp
      const contactData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      }

      // Pour le moment, on simule l'enregistrement
      // En attendant la base de données, on peut stocker dans localStorage
      const existingContacts = JSON.parse(localStorage.getItem('dxa-contacts') || '[]')
      existingContacts.push(contactData)
      localStorage.setItem('dxa-contacts', JSON.stringify(existingContacts))

      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
        <Header />
        <div className="pt-40 pb-20 px-4">
          <div className="container mx-auto">
            <Card className="max-w-2xl mx-auto text-center border-0 shadow-2xl bg-white">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">
                  Message Envoyé !
                </h1>
                <p className="text-lg text-slate-600 mb-8">
                  Merci pour votre intérêt. Notre équipe vous contactera dans les 24 heures pour discuter de votre projet.
                </p>
                <div className="space-y-4">
                  <Button onClick={() => setIsSubmitted(false)} className="w-full">
                    Envoyer un autre message
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/'} className="w-full">
                    Retour à l'accueil
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Parlons de Votre Projet
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transformons ensemble votre vision technologique en réalité. 
              Notre équipe d'experts est là pour vous accompagner.
            </p>
            <Badge className="bg-blue-100 text-blue-800 border-blue-200">
              🚀 Consultation gratuite • Réponse sous 24h
            </Badge>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl">Démarrons votre projet</CardTitle>
                <CardDescription>
                  Partagez-nous vos besoins et nous vous proposerons une solution sur mesure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email professionnel *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Entreprise</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                    />
                  </div>

                  {/* Détails du projet */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Service souhaité</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {SERVICES.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <div className="flex items-center space-x-2">
                                <service.icon className="w-4 h-4" />
                                <span>{service.label}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline souhaitée</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">Urgent (moins de 1 mois)</SelectItem>
                          <SelectItem value="court">Court terme (1-3 mois)</SelectItem>
                          <SelectItem value="moyen">Moyen terme (3-6 mois)</SelectItem>
                          <SelectItem value="long">Long terme (plus de 6 mois)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget estimé</Label>
                    <Select value={formData.budget} onValueChange={(value) => handleChange('budget', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une fourchette" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Moins de 50k€</SelectItem>
                        <SelectItem value="medium">50k€ - 200k€</SelectItem>
                        <SelectItem value="large">200k€ - 500k€</SelectItem>
                        <SelectItem value="enterprise">500k€+</SelectItem>
                        <SelectItem value="discuss">À discuter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Décrivez votre projet *</Label>
                    <Textarea
                      id="message"
                      placeholder="Parlez-nous de vos défis, objectifs et contraintes..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-500 text-center">
                    En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe concernant votre projet.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Coordonnées */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Nos Coordonnées</CardTitle>
                <CardDescription>
                  Plusieurs moyens de nous contacter
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {CONTACT_INFO.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{info.title}</h3>
                      <p className="text-slate-600">{info.value}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Équipe */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Notre Équipe</CardTitle>
                <CardDescription>
                  Experts à votre service
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {TEAM_MEMBERS.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800">{member.name}</h4>
                      <p className="text-sm text-slate-600">{member.role}</p>
                      <p className="text-xs text-slate-500">{member.expertise}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Réseaux sociaux */}
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Suivez-nous</CardTitle>
                <CardDescription>
                  Restez connecté avec DXA Technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-lg font-semibold mb-2">Consultation Gratuite</h3>
                <p className="text-sm opacity-90 mb-4">
                  Planifiez un appel de 30 minutes avec nos experts pour discuter de votre projet
                </p>
                <Button variant="secondary" className="w-full">
                  Réserver un créneau
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}