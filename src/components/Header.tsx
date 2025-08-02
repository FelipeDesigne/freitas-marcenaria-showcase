import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoFreitas from "@/assets/logo-marcenaria-freitas.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoFreitas} 
              alt="Marcenaria Freitas" 
              className="w-12 h-12 rounded-full object-cover border-2 border-brown-light"
            />
            <div>
              <h1 className="text-xl font-bold text-brown-dark">Marcenaria Freitas</h1>
              <p className="text-sm text-muted-foreground">Móveis Planejados</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="tel:(43)8812-8694" className="flex items-center text-sm text-brown-dark hover:text-brown-light transition-colors">
              <Phone size={16} className="mr-1" />
              (43) 8812-8694
            </a>
            <Button 
              variant="whatsapp" 
              size="sm"
              onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento para móveis planejados.', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-2 text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-2 text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left py-2 text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="block w-full text-left py-2 text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="block w-full text-left py-2 text-foreground hover:text-brown-dark transition-colors font-medium"
            >
              Contato
            </button>
            <div className="pt-3 space-y-2">
              <a href="tel:(43)8812-8694" className="flex items-center text-sm text-brown-dark">
                <Phone size={16} className="mr-1" />
                (43) 8812-8694
              </a>
              <Button 
                variant="whatsapp" 
                size="sm" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5543988128694?text=Olá! Gostaria de um orçamento para móveis planejados.', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};