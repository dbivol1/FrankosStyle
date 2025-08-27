"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999?text=Hola, me interesa conocer más sobre sus productos", "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/frankosstyle", "_blank")
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@frankosstyle.com"
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contáctanos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Estamos aquí para ayudarte a encontrar el estilo perfecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="¿En qué podemos ayudarte?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Quick Contact Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handleWhatsApp} className="w-full justify-start gap-3 bg-green-600 hover:bg-green-700">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp: +51 999 999 999
                </Button>
                <Button
                  onClick={handleInstagram}
                  variant="outline"
                  className="w-full justify-start gap-3 bg-transparent"
                >
                  <Instagram className="w-5 h-5" />
                  @frankosstyle
                </Button>
                <Button onClick={handleEmail} variant="outline" className="w-full justify-start gap-3 bg-transparent">
                  <Mail className="w-5 h-5" />
                  info@frankosstyle.com
                </Button>
              </CardContent>
            </Card>

            {/* Store Information */}
            <Card>
              <CardHeader>
                <CardTitle>Información de la Tienda</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground">
                      Av. Principal 123, Centro Comercial Plaza
                      <br />
                      Lima, Perú
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+51 999 999 999</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-accent" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@frankosstyle.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Horarios de Atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="text-muted-foreground">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
