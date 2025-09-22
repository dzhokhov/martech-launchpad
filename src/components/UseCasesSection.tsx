import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Building2, Target, Cog } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      id: "startups",
      title: "MarTech стартапы",
      icon: Rocket,
      subtitle: "Запустите MVP и привлеките инвестиции быстрее",
      description: "Превратите идею в работающий продукт за недели, а не месяцы",
      benefits: [
        "MVP готов за 6 недель — демонстрируйте инвесторам",
        "Сфокусируйтесь на уникальной бизнес-логике",
        "Готовая enterprise-архитектура для масштабирования",
        "Снизьте технические риски для инвесторов"
      ],
      cta: "Получить стартап-пакет"
    },
    {
      id: "agencies",
      title: "Рекламные агентства", 
      icon: Target,
      subtitle: "Трансформируйтесь в SaaS-бизнес",
      description: "Монетизируйте экспертизу через собственную платформу",
      benefits: [
        "Создайте recurring revenue поток",
        "Автоматизируйте рутинные процессы",
        "Масштабируйте обслуживание клиентов",
        "Увеличьте margins с сервисов"
      ],
      cta: "Обсудить трансформацию"
    },
    {
      id: "enterprise",
      title: "Enterprise-бренды",
      icon: Building2,
      subtitle: "Создайте внутреннюю платформу закупки трафика",
      description: "Централизуйте управление рекламными кампаниями",
      benefits: [
        "Единая экосистема для всех каналов",
        "Полный контроль над данными и процессами",
        "Integration с внутренними системами",
        "Соответствие корпоративным стандартам"
      ],
      cta: "Запросить корп. решение"
    },
    {
      id: "integrators",
      title: "Системные интеграторы",
      icon: Cog,
      subtitle: "Упакуйте экспертизу в тиражируемый продукт",
      description: "Превратите консалтинг в масштабируемое решение",
      benefits: [
        "White-label платформа под вашим брендом",
        "Тиражируемость решений для клиентов",
        "Новые потоки recurring revenue",
        "Дифференциация от конкурентов"
      ],
      cta: "Изучить партнерство"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Идеально для вашего 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              бизнес-кейса
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Персонализированные сценарии использования для различных типов бизнеса
          </p>
        </div>

        <Tabs defaultValue="startups" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-1 bg-muted/30">
            {useCases.map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <TabsTrigger 
                  key={useCase.id} 
                  value={useCase.id}
                  className="flex flex-col gap-2 p-4 h-auto data-[state=active]:bg-background data-[state=active]:shadow-md"
                >
                  <IconComponent className="h-6 w-6" />
                  <span className="text-sm font-medium">{useCase.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0">
                <Card className="tech-card border-0 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{useCase.title}</h3>
                            <p className="text-primary font-medium">{useCase.subtitle}</p>
                          </div>
                        </div>

                        <p className="text-lg text-muted-foreground">
                          {useCase.description}
                        </p>

                        <div className="space-y-3">
                          {useCase.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        <Button variant="gradient" size="lg">
                          {useCase.cta}
                        </Button>
                      </div>

                      <div className="relative">
                        <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center border">
                          <IconComponent className="h-24 w-24 text-muted-foreground/30" />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-primary/10 rounded-lg p-3 animate-float">
                          <div className="text-sm font-semibold text-primary">
                            {index === 0 ? "6 недель" : index === 1 ? "3x ROI" : index === 2 ? "Enterprise" : "White-label"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCasesSection;