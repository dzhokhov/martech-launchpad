import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Play } from "lucide-react";
import heroImage from "@/assets/hero-martech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-glow-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Лицензируемое ядро для MarTech SaaS
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Лицензируемое ядро для маркетинговых SaaS — 
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  запуск в 3-5 раз быстрее
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Готовая платформа с 40+ коннекторами к рекламным сетям, enterprise-безопасностью 
                и полным стеком для создания собственного MarTech-продукта
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>10+ млрд API-запросов ежемесячно</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <span>SOC 2 Type II Ready</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Запросить демо
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="hero-outline" size="xl" className="group">
                <Download className="mr-2 h-5 w-5" />
                Техническая документация
              </Button>
            </div>

            {/* Quick Demo Link */}
            <div className="flex items-center gap-4 pt-4">
              <Button variant="ghost" size="sm" className="group p-0 h-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="h-4 w-4 text-primary fill-current" />
                  </div>
                  <span className="text-sm font-medium">Посмотреть обзор платформы (2 мин)</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="MarTech Platform Architecture"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-4 shadow-lg border animate-fade-in-up delay-500">
              <div className="text-2xl font-bold text-primary">40+</div>
              <div className="text-sm text-muted-foreground">Коннекторов</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card rounded-xl p-4 shadow-lg border animate-fade-in-up delay-700">
              <div className="text-2xl font-bold text-accent">99.9%</div>
              <div className="text-sm text-muted-foreground">SLA Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;