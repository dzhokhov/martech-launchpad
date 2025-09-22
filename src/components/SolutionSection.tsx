import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Workflow, 
  Shield, 
  BarChart3, 
  Plug,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const SolutionSection = () => {
  const modules = [
    {
      icon: Plug,
      title: "ETL-коннекторы",
      description: "40+ готовых интеграций",
      details: "Google Ads, Meta, Яндекс.Директ, VK Ads, TikTok, Apple Search Ads, Microsoft Ads и другие",
      features: ["Автообновление API", "Нормализация данных", "Обработка ошибок"]
    },
    {
      icon: Database,
      title: "Data Layer",
      description: "Унифицированная схема данных",
      details: "Централизованное хранилище с нормализованными метриками и измерениями",
      features: ["Реал-тайм синхронизация", "Версионирование схем", "Data lineage"]
    },
    {
      icon: Workflow,
      title: "Orchestration Engine",
      description: "Управление кампаниями",
      details: "Автоматизация процессов, правила, триггеры и workflow для управления рекламой",
      features: ["Правила автооптимизации", "Уведомления", "Планировщик задач"]
    },
    {
      icon: Shield,
      title: "Enterprise Core",
      description: "Корпоративная готовность",
      details: "Multi-tenancy, RBAC, биллинг, SSO/SAML интеграции из коробки",
      features: ["SOC 2 готовность", "GDPR compliance", "Аудит логи"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Готовые дашборды",
      details: "Встроенная аналитика, конструктор отчетов, BI-интеграции",
      features: ["Кастомные метрики", "Экспорт данных", "API для отчетов"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Полный технологический 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              стек из коробки
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Модульная архитектура позволяет использовать только нужные компоненты 
            или получить полную платформу для быстрого запуска
          </p>
          
          {/* Architecture Diagram */}
          <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
              {modules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-2">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-sm font-medium">{module.title}</div>
                  </div>
                );
              })}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={index} 
                className="tech-card border-0 group overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-1">{module.title}</CardTitle>
                      <p className="text-sm font-medium text-primary">{module.description}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {module.details}
                  </p>
                  
                  <div className="space-y-2">
                    {module.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button variant="gradient" size="lg" className="group">
            Изучить техническую архитектуру
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;