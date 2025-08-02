import { Phone, MapPin, MessageCircle } from "lucide-react";
import logoFreitas from "@/assets/logo-marcenaria-freitas.jpg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoFreitas} 
                alt="Marcenaria Freitas" 
                className="w-12 h-12 rounded-full object-cover border-2 border-brown-light"
              />
              <div>
                <h3 className="text-xl font-bold">Marcenaria Freitas</h3>
                <p className="text-brown-light text-sm">Móveis Planejados</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Especializados em móveis planejados sob medida. 
              Qualidade, pontualidade e atendimento personalizado 
              para transformar seus ambientes.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-brown-light" />
                <a 
                  href="tel:(43)8812-8694" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  (43) 8812-8694
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-brown-light mt-0.5" />
                <div className="text-white/80 text-sm">
                  <p>Rua Salim Bechara, nº 3</p>
                  <p>Ribeirão Claro - PR</p>
                </div>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-4 h-4 mr-3 text-brown-light" />
                <button 
                  onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de mais informações sobre móveis planejados.', '_blank')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Cozinhas Planejadas</li>
              <li>• Quartos Completos</li>
              <li>• Banheiros Funcionais</li>
              <li>• Home Office</li>
              <li>• Painéis para TV</li>
              <li>• Closets Organizados</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} Marcenaria Freitas. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento gratuito.', '_blank')}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Orçamento Gratuito
              </button>
              <button 
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};