import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Clock,
  CheckCircle
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brown-dark mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pronto para transformar seus ambientes? Entre em contato conosco 
            e solicite um orçamento gratuito sem compromisso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* WhatsApp Card */}
          <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                WhatsApp
              </h3>
              <p className="text-green-700 mb-6">
                Fale conosco agora mesmo pelo WhatsApp. Resposta rápida e atendimento personalizado.
              </p>
              <Button 
                variant="whatsapp" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento para móveis planejados.', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="bg-brown-light/10 border-brown-light/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-brown-dark mb-4">
                Telefone
              </h3>
              <p className="text-muted-foreground mb-6">
                Ligue diretamente para nós e tire todas suas dúvidas sobre móveis planejados.
              </p>
              <Button 
                variant="elegant" 
                className="w-full"
                onClick={() => window.location.href = 'tel:(43)8812-8694'}
              >
                (43) 8812-8694
              </Button>
            </CardContent>
          </Card>

          {/* Location Card */}
          <Card className="bg-muted/50 border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-brown-dark text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-brown-dark mb-4">
                Localização
              </h3>
              <p className="text-muted-foreground mb-6">
                Rua Salim Bechara, nº 3<br />
                Ribeirão Claro - PR
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://maps.google.com/?q=Rua+Salim+Bechara+3+Ribeirão+Claro+PR', '_blank')}
              >
                Ver no Mapa
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brown-dark to-brown-light rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Solicite seu Orçamento Gratuito
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Não perca tempo! Entre em contato conosco agora mesmo e descubra 
            como podemos transformar seus ambientes com móveis planejados sob medida.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">Orçamento gratuito</span>
            </div>
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">Sem compromisso</span>
            </div>
            <div className="flex items-center justify-center text-white/90">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">Atendimento rápido</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-brown-dark hover:bg-white/90 border-white text-lg px-8 py-4 h-auto"
              onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento gratuito para móveis planejados.', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 border-white text-lg px-8 py-4 h-auto"
              onClick={() => window.location.href = 'tel:(43)8812-8694'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ligar Agora
            </Button>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center text-muted-foreground mb-4">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">Horário de Atendimento</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Segunda a Sexta: 8h às 18h • Sábado: 8h às 12h
          </p>
        </div>
      </div>
    </section>
  );
};