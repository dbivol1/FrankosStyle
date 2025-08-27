import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Ejecutivo",
      content:
        "La calidad de los ternos de Franko's Style es excepcional. Me siento seguro y elegante en cada reunión importante.",
      rating: 5,
      image: "/professional-businessman-headshot--confident-smile.png",
    },
    {
      name: "Roberto Silva",
      role: "Empresario",
      content:
        "El servicio personalizado y la atención al detalle hacen la diferencia. Recomiendo Franko's Style sin dudarlo.",
      rating: 5,
      image: "/mature-businessman-portrait--elegant-appearance--p.png",
    },
    {
      name: "Diego Ramírez",
      role: "Abogado",
      content:
        "Encontré el terno perfecto para mi boda. La calidad y el ajuste fueron impecables. Excelente experiencia.",
      rating: 5,
      image: "/young-professional-man-portrait--confident-express.png",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
