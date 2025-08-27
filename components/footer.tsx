import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Franko's Style</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Elegancia masculina desde 2010. Vistiendo al hombre moderno con estilo y distinción.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#catalog"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-primary-foreground/80">Ternos Ejecutivos</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Camisas Premium</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Corbatas de Seda</span>
              </li>
              <li>
                <span className="text-primary-foreground/80">Accesorios</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">Av. Principal 123, Lima</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">+51 999 999 999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80 text-sm">info@frankosstyle.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/80">Síguenos:</span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/frankosstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@frankosstyle.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm">© 2024 Franko's Style. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
