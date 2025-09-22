import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, TrendingUp, CheckCircle } from "lucide-react";

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: Rocket,
      title: "Скорость запуска",
      color: "primary",
      benefits: [
        "MVP за 3-6 недель вместо 18 месяцев",
        "Готовые коннекторы и документация",
        "White-label решение под вашим брендом",
        "Быстрое прототипирование идей"
      ],
      highlight: "3-6 недель"
    },
    {
      icon: Shield,
      title: "Enterprise-готовность",
      color: "accent",
      benefits: [
        "SOC 2 Type II compliance-ready архитектура",
        "GDPR/CCPA соответствие из коробки",
        "SLA 99.9% uptime гарантии",
        "Enterprise-grade безопасность"
      ],
      highlight: "99.9% SLA"
    },
    {
      icon: TrendingUp,
      title: "Масштабируемость",
      color: "emerald",
      benefits: [
        "От 10 до 100K тенантов без переписывания",
        "Автоскейлинг под пиковые нагрузки",
        "Микросервисная архитектура",
        "Глобальная CDN и кэширование"
      ],
      highlight: "100K+ тенантов"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "bg-primary/10 text-primary border-primary/20",
      accent: "bg-accent/10 text-accent border-accent/20",
      emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Фокусируйтесь на 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              бизнес-логике,
            </span>
            <br />
            а не на инфраструктуре
          </h2>
          <p className="text-xl text-muted-foreground">
            Три ключевых столпа, которые обеспечивают конкурентное преимущество вашему продукту
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => {
            const IconComponent = prop.icon;
            return (
              <Card 
                key={index}
                className="tech-card border-0 relative overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getColorClasses(prop.color)}`}>
                      <IconComponent className="h-7 w-7" />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getColorClasses(prop.color)}`}>
                      {prop.highlight}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{prop.title}</CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {prop.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${benefitIndex * 50}ms` }}>
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${prop.color === 'primary' ? 'text-primary' : prop.color === 'accent' ? 'text-accent' : 'text-emerald-600'}`} />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ${
                  prop.color === 'primary' 
                    ? 'bg-gradient-to-br from-primary/5 to-transparent' 
                    : prop.color === 'accent' 
                    ? 'bg-gradient-to-br from-accent/5 to-transparent'
                    : 'bg-gradient-to-br from-emerald-500/5 to-transparent'
                }`}></div>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              85%
            </div>
            <p className="text-sm text-muted-foreground">Сокращение time-to-market</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              $1.2M+
            </div>
            <p className="text-sm text-muted-foreground">Экономия на разработке</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              40+
            </div>
            <p className="text-sm text-muted-foreground">Готовых интеграций</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <p className="text-sm text-muted-foreground">SLA uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsSection;