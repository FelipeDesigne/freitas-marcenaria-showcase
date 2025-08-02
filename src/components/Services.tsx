import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  Bed, 
  Bath, 
  Laptop, 
  Tv, 
  Shirt,
  CheckCircle
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8 text-brown-dark" />,
      title: "Cozinhas Planejadas",
      description: "Projetos funcionais que otimizam o espaço e facilitam o dia a dia",
      features: ["Armários sob medida", "Bancadas resistentes", "Aproveitamento máximo do espaço"]
    },
    {
      icon: <Bed className="w-8 h-8 text-brown-dark" />,
      title: "Quartos Completos", 
      description: "Móveis que transformam seu quarto em um ambiente aconchegante",
      features: ["Guarda-roupas planejados", "Camas com gavetas", "Criados-mudos integrados"]
    },
    {
      icon: <Bath className="w-8 h-8 text-brown-dark" />,
      title: "Banheiros Funcionais",
      description: "Soluções inteligentes para banheiros de todos os tamanhos",
      features: ["Gabinetes sob medida", "Prateleiras embutidas", "Resistente à umidade"]
    },
    {
      icon: <Laptop className="w-8 h-8 text-brown-dark" />,
      title: "Escritórios em Casa",
      description: "Home office funcional para trabalhar com produtividade",
      features: ["Mesa de trabalho ergonômica", "Estantes para organização", "Ambiente profissional"]
    },
    {
      icon: <Tv className="w-8 h-8 text-brown-dark" />,
      title: "Painéis para TV",
      description: "Painéis modernos que valorizam sua sala de estar",
      features: ["Design personalizado", "Suporte para TV integrado", "Acabamento premium"]
    },
    {
      icon: <Shirt className="w-8 h-8 text-brown-dark" />,
      title: "Closets Organizados",
      description: "Closets que organizam e facilitam o seu dia a dia",
      features: ["Organização inteligente", "Gavetas especiais", "Cabideiros planejados"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-dark mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Móveis planejados sob medida em MDF com acabamento de alto padrão. 
            Cada projeto é único e desenvolvido especialmente para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-brown-light/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brown-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-brown-light/10 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-brown-dark text-center mb-12">
            Como Funciona Nosso Processo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h4 className="font-semibold text-brown-dark mb-2">Consulta Inicial</h4>
              <p className="text-sm text-muted-foreground">
                Visitamos sua casa para entender suas necessidades e medir o espaço
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h4 className="font-semibold text-brown-dark mb-2">Projeto 3D</h4>
              <p className="text-sm text-muted-foreground">
                Criamos um projeto personalizado em 3D para você visualizar o resultado
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h4 className="font-semibold text-brown-dark mb-2">Produção</h4>
              <p className="text-sm text-muted-foreground">
                Fabricamos seus móveis com materiais de qualidade e acabamento perfeito
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h4 className="font-semibold text-brown-dark mb-2">Montagem</h4>
              <p className="text-sm text-muted-foreground">
                Nossa equipe instala e finaliza tudo em sua casa com máxima qualidade
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de agendar uma consulta para móveis planejados.', '_blank')}
              className="text-lg px-8 py-4 h-auto"
            >
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};