import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, Wrench } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-brown-dark" />,
      title: "Atendimento Personalizado",
      description: "Cada projeto é único. Trabalhamos de perto com você para criar móveis que atendam suas necessidades específicas."
    },
    {
      icon: <Award className="w-8 h-8 text-brown-dark" />,
      title: "Materiais de Qualidade",
      description: "Utilizamos apenas MDF de primeira linha e ferragens de qualidade superior para garantir durabilidade."
    },
    {
      icon: <Clock className="w-8 h-8 text-brown-dark" />,
      title: "Pontualidade na Entrega",
      description: "Cumprimos rigorosamente os prazos estabelecidos, respeitando seu tempo e planejamento."
    },
    {
      icon: <Wrench className="w-8 h-8 text-brown-dark" />,
      title: "Montagem Profissional",
      description: "Equipe especializada em montagem e instalação, garantindo perfeito acabamento e funcionamento."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-dark mb-6">
            Sobre a Marcenaria Freitas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com anos de experiência em móveis planejados, a Marcenaria Freitas se destaca 
            pela qualidade, pontualidade e atendimento personalizado. Especializados em 
            projetos sob medida que maximizam o aproveitamento do espaço com design moderno e funcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background border-brown-light/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-brown-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-xl p-8 md:p-12 shadow-lg border border-brown-light/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-brown-dark mb-6">
                Nossa Localização
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-start">
                  <span className="font-semibold text-brown-dark mr-2">Endereço:</span>
                  Rua Salim Bechara, nº 3<br />
                  Ribeirão Claro - PR
                </p>
                <p>
                  <span className="font-semibold text-brown-dark">Telefone:</span>
                  <a href="tel:(43)8812-8694" className="ml-2 hover:text-brown-dark transition-colors">
                    (43) 8812-8694
                  </a>
                </p>
                <p className="text-sm">
                  Atendemos Ribeirão Claro e região com projetos personalizados 
                  e orçamentos sem compromisso. Entre em contato conosco!
                </p>
              </div>
            </div>
            <div className="bg-brown-light/10 rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-brown-dark mb-4">
                Pronto para começar seu projeto?
              </h4>
              <p className="text-muted-foreground mb-6">
                Solicite um orçamento gratuito e descubra como podemos transformar seus ambientes.
              </p>
              <div className="space-y-3">
                <button 
                  onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento gratuito para móveis planejados.', '_blank')}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  Falar no WhatsApp
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:(43)8812-8694'}
                  className="w-full bg-brown-dark text-white py-3 px-6 rounded-lg hover:bg-brown-dark/90 transition-colors font-semibold"
                >
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};