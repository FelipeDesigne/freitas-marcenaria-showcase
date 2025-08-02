import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import bedroomFurniture from "@/assets/bedroom-furniture.jpg";
import officeFurniture from "@/assets/office-furniture.jpg";
import closetFurniture from "@/assets/closet-furniture.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: heroKitchen,
      title: "Cozinha Moderna Planejada",
      description: "Cozinha completa com armários sob medida e bancada em granito",
      category: "Cozinha"
    },
    {
      image: bedroomFurniture,
      title: "Quarto Casal Completo",
      description: "Guarda-roupa planejado com cama e criados-mudos integrados",
      category: "Quarto"
    },
    {
      image: officeFurniture,
      title: "Home Office Funcional",
      description: "Escritório em casa com mesa de trabalho e estantes organizadoras",
      category: "Escritório"
    },
    {
      image: closetFurniture,
      title: "Closet Organizado",
      description: "Closet planejado com máximo aproveitamento do espaço",
      category: "Closet"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-dark mb-6">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça alguns dos nossos projetos realizados. Cada móvel é único 
            e desenvolvido especialmente para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-background border-brown-light/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brown-dark/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Section */}
        <div className="bg-background rounded-xl p-8 md:p-12 shadow-lg border border-brown-light/20">
          <h3 className="text-2xl md:text-3xl font-bold text-brown-dark text-center mb-8">
            Transformações Incríveis
          </h3>
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-6">
              Veja como transformamos espaços comuns em ambientes únicos e funcionais. 
              Cada projeto é pensado para maximizar o aproveitamento do espaço e atender 
              às necessidades específicas de cada cliente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-brown-dark mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Projetos Realizados</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-brown-dark mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Avaliação dos Clientes</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-brown-dark mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Vi a galeria de projetos e gostaria de saber mais sobre móveis planejados.', '_blank')}
              className="text-lg px-8 py-4 h-auto"
            >
              Quero Meu Projeto Personalizado
            </Button>
          </div>
        </div>

        {/* Modal for image viewing */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-brown-light transition-colors"
              >
                <X size={32} />
              </button>
              <img 
                src={selectedImage} 
                alt="Projeto em destaque"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};