import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, Cog, TestTube, Rocket } from "lucide-react";

const ImplementationSection = () => {
  const timelineSteps = [
    {
      week: "Неделя 1",
      icon: Calendar,
      title: "Архитектурная сессия и планирование",
      description: "Анализ требований, выбор компонентов, планирование архитектуры",
      deliverables: [
        "Техническая архитектура решения",
        "План миграции и интеграции",
        "Roadmap разработки"
      ],
      color: "primary"
    },
    {
      week: "Недели 2-3",
      icon: Cog,
      title: "Настройка окружения и брендирование",
      description: "Развертывание инфраструктуры, настройка CI/CD, кастомизация UI",
      deliverables: [
        "Настроенная dev/staging среда",
        "Брендированный интерфейс",
        "Базовая конфигурация API"
      ],
      color: "accent"
    },
    {
      week: "Неделя 4",
      icon: TestTube,
      title: "Интеграция и тестирование",
      description: "Подключение коннекторов, тестирование функций, обучение команды",
      deliverables: [
        "Работающие интеграции",
        "Полное тестирование системы",
        "Обученная команда"
      ],
      color: "emerald"
    },
    {
      week: "Запуск",
      icon: Rocket,
      title: "Go-live с поддержкой команды",
      description: "Запуск в production, мониторинг, техническая поддержка",
      deliverables: [
        "Production deployment",
        "Мониторинг и алерты",
        "Ongoing техподдержка"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; }> = {
      primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
      accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20" },
      emerald: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
      orange: { bg: "bg-orange-500/10", text: "text-orange-600", border: "border-orange-500/20" }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            От подписания до production 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              за 30 дней
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Структурированный процесс внедрения с четкими этапами и результатами
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 md:space-y-0">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colors = getColorClasses(step.color);
              
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-start ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Point */}
                  <div className="relative flex-shrink-0 mx-auto md:mx-0">
                    <div className={`timeline-item w-24 h-24 rounded-2xl flex items-center justify-center ${colors.bg} ${colors.border} border-2 relative z-10`}>
                      <IconComponent className={`h-10 w-10 ${colors.text}`} />
                    </div>
                    
                    {/* Timeline Line */}
                    {index < timelineSteps.length - 1 && (
                      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-primary/30 to-accent/30 hidden md:block"></div>
                    )}
                  </div>

                  {/* Content */}
                  <Card className="tech-card border-0 flex-1 max-w-lg mx-auto md:mx-0">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} mb-2`}>
                            {step.week}
                          </div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-sm">Результаты:</h4>
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="flex items-center gap-3">
                              <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                              <span className="text-sm text-muted-foreground">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              30
            </div>
            <p className="text-sm text-muted-foreground">Дней до production</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-sm text-muted-foreground">Проектов в срок</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-sm text-muted-foreground">Поддержка при запуске</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-sm text-muted-foreground">Успешных запусков</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;