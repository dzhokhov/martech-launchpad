import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Webhook, 
  GitBranch, 
  RotateCcw, 
  Shield, 
  FileText, 
  Container,
  Workflow
} from "lucide-react";

const TechFeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Реал-тайм синхронизация",
      description: "Мгновенная синхронизация данных между платформами с минимальной задержкой"
    },
    {
      icon: Webhook,
      title: "Webhook'и и события",
      description: "Гибкая система уведомлений и интеграций через webhook'и и события"
    },
    {
      icon: GitBranch,
      title: "Версионирование API",
      description: "Полная обратная совместимость и плавные обновления API"
    },
    {
      icon: RotateCcw,
      title: "Идемпотентность операций",
      description: "Безопасное повторное выполнение операций без дублирования"
    },
    {
      icon: Shield,
      title: "Rate limiting и квоты",
      description: "Встроенная защита от перегрузок с гибкими лимитами"
    },
    {
      icon: FileText,
      title: "Аудит-логи",
      description: "Полное логирование всех операций для соответствия требованиям"
    },
    {
      icon: Container,
      title: "Kubernetes-ready",
      description: "Готовые манифесты и автоматическое масштабирование в K8s"
    },
    {
      icon: Workflow,
      title: "CI/CD pipeline templates",
      description: "Готовые шаблоны для автоматизации развертывания и тестирования"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Всё необходимое для успешного 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MarTech SaaS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade возможности, которые обычно требуют месяцы разработки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="tech-grid-item tech-card border-0 p-6 group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Specs */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{"<50ms"}</div>
            <p className="text-sm text-muted-foreground">API response time</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">10B+</div>
            <p className="text-sm text-muted-foreground">Requests per month</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">99.99%</div>
            <p className="text-sm text-muted-foreground">Data accuracy</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-accent">24/7</div>
            <p className="text-sm text-muted-foreground">Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechFeaturesSection;