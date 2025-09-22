import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const pricingTiers = [
    {
      name: "Startup",
      description: "Идеально для MVP и стартапов",
      badge: "Популярный",
      badgeVariant: "secondary" as const,
      features: [
        "До 100 тенантов",
        "Базовые коннекторы (Google, Meta, Yandex)",
        "Стандартная поддержка",
        "Базовая документация",
        "Email поддержка",
        "Community форум"
      ],
      limitations: [
        "Лимит API запросов: 1M/месяц",
        "Базовая аналитика",
        "Стандартные SLA"
      ],
      cta: "Начать с Startup",
      popular: false
    },
    {
      name: "Growth",
      description: "Для растущего бизнеса",
      badge: "Рекомендуем",
      badgeVariant: "default" as const,
      features: [
        "До 1000 тенантов",
        "Все коннекторы (40+)",
        "Приоритетная поддержка",
        "Расширенная документация",
        "Slack/Teams интеграция",
        "Персональный менеджер",
        "Custom webhook'и",
        "Advanced аналитика"
      ],
      limitations: [
        "Лимит API запросов: 100M/месяц",
        "Расширенные SLA 99.9%"
      ],
      cta: "Выбрать Growth",
      popular: true
    },
    {
      name: "Enterprise",
      description: "Для крупных компаний",
      badge: "Максимум возможностей",
      badgeVariant: "outline" as const,
      features: [
        "Неограниченное количество тенантов",
        "Все коннекторы + custom",
        "Dedicated support 24/7",
        "Полная документация + training",
        "On-premise deployment",
        "Dedicated инфраструктура",
        "Custom SLA соглашения",
        "White-glove onboarding",
        "Персональная архитектурная сессия"
      ],
      limitations: [],
      cta: "Обсудить Enterprise",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Прозрачная и предсказуемая
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              модель лицензирования
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Выберите тариф, который соответствует масштабу вашего проекта
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`tech-card border-0 relative overflow-hidden ${
                tier.popular 
                  ? 'ring-2 ring-primary/20 transform scale-105' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
              )}
              
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <Badge variant={tier.badgeVariant} className="text-xs">
                    {tier.badge}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Включено:
                  </h4>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {tier.limitations.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                      Лимиты:
                    </h4>
                    {tier.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Button 
                  variant={tier.popular ? "hero" : "outline"} 
                  size="lg" 
                  className="w-full group"
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  {index === 2 
                    ? "Индивидуальные условия и цены" 
                    : "Цены обсуждаются индивидуально"
                  }
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4 animate-fade-in-up">
          <p className="text-muted-foreground">
            Все тарифы включают техническую поддержку и регулярные обновления
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Без скрытых платежей</span>
            <span>✓ Гибкие условия оплаты</span>
            <span>✓ Возможность кастомизации</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;