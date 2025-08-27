import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function CatalogSection() {
  const products = [
    {
      id: 1,
      name: "Terno Ejecutivo Negro",
      price: "$899",
      category: "Ternos",
      image: "/elegant-black-business-suit-on-mannequin--professi.png",
      isNew: true,
    },
    {
      id: 2,
      name: "Camisa Blanca Premium",
      price: "$129",
      category: "Camisas",
      image: "/white-dress-shirt-folded-elegantly--premium-cotton.png",
      isNew: false,
    },
    {
      id: 3,
      name: "Corbata Seda Azul",
      price: "$79",
      category: "Corbatas",
      image: "/blue-silk-tie-with-elegant-pattern--luxury-necktie.png",
      isNew: false,
    },
    {
      id: 4,
      name: "Terno Gris Carbón",
      price: "$949",
      category: "Ternos",
      image: "/charcoal-gray-suit-on-mannequin--modern-cut--profe.png",
      isNew: true,
    },
    {
      id: 5,
      name: "Gemelos Plata",
      price: "$159",
      category: "Accesorios",
      image: "/silver-cufflinks-on-black-velvet--luxury-men-acces.png",
      isNew: false,
    },
    {
      id: 6,
      name: "Camisa Azul Cielo",
      price: "$139",
      category: "Camisas",
      image: "/light-blue-dress-shirt--premium-cotton--elegant-me.png",
      isNew: false,
    },
  ]

  const categories = ["Todos", "Ternos", "Camisas", "Corbatas", "Accesorios"]

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestro Catálogo</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Descubre nuestra selección exclusiva de prendas y accesorios para el hombre elegante
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "Todos" ? "default" : "outline"} className="rounded-full">
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Nuevo</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-balance">{product.name}</h3>
                  <span className="text-2xl font-bold text-accent">{product.price}</span>
                </div>
                <p className="text-muted-foreground mb-4">{product.category}</p>
                <div className="flex gap-2">
                  <Button className="flex-1">Comprar</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Más Info
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  )
}
