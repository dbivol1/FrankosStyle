import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Sparkles } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Award,
      title: "Calidad Premium",
      description:
        "Utilizamos solo los mejores materiales y técnicas de confección para garantizar prendas de la más alta calidad.",
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      description: "Cada cliente es único. Ofrecemos asesoramiento personalizado para encontrar el estilo perfecto.",
    },
    {
      icon: Sparkles,
      title: "Elegancia Atemporal",
      description: "Nuestros diseños combinan la tradición clásica con toques modernos para un estilo sofisticado.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sobre Franko's Style</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Desde 2010, nos dedicamos a vestir al hombre moderno con elegancia y distinción. Nuestra pasión por la moda
            masculina se refleja en cada prenda que creamos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/elegant-menswear-store-interior-with-suits-display.png"
              alt="Interior de la tienda Franko's Style"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6">Nuestra Historia</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Franko's Style nació de la visión de crear ropa masculina que combine la elegancia clásica con la
              funcionalidad moderna. Cada pieza es cuidadosamente seleccionada y diseñada para el hombre que valora la
              calidad y el estilo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Con más de una década de experiencia, hemos vestido a miles de hombres para sus momentos más importantes,
              desde reuniones de negocios hasta celebraciones especiales.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
