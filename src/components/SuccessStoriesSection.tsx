import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const SuccessStoriesSection = () => {
  const successStories = [
    {
      icon: Clock,
      industry: "AdTech Startup",
      company: "Confidential SaaS",
      result: "Запуск за 6 недель",
      description: "вместо планируемых 12 месяцев",
      details: "Стартап в области программатик-рекламы запустил полнофункциональную платформу за 6 недель, привлек серию A на $3M",
      metrics: [
        "6 недель до MVP",
        "Серия A $3M",
        "50+ клиентов за первый квартал"
      ],
      color: "primary"
    },
    {
      icon: DollarSign,
      industry: "Digital Agency",
      company: "Media Innovation Group",
      result: "Экономия $1.2M",
      description: "на разработке инфраструктуры",
      details: "Крупное агентство избежало найма команды из 8 инженеров и сфокусировалось на бизнес-логике собственного DSP",
      metrics: [
        "$1.2M экономии",
        "8 месяцев сэкономленного времени", 
        "3x быстрее time-to-market"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "Масштабирование без боли",
      industry: "MarTech Platform",
      company: "Growth Analytics Pro",
      result: "Рост с 10 до 5000 клиентов",
      description: "за год без переписывания архитектуры",
      details: "Платформа аналитики выросла в 500 раз по количеству клиентов, сохранив высокую производительность",
      metrics: [
        "500x рост клиентской базы",
        "99.9% uptime",
        "Автоскейлинг без простоев"
      ],
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; gradient: string; }> = {
      primary: { 
        bg: "bg-primary/5", 
        text: "text-primary", 
        gradient: "from-primary/20 to-primary/5" 
      },
      accent: { 
        bg: "bg-accent/5", 
        text: "text-accent", 
        gradient: "from-accent/20 to-accent/5" 
      },
      emerald: { 
        bg: "bg-emerald-500/5", 
        text: "text-emerald-600", 
        gradient: "from-emerald-500/20 to-emerald-500/5" 
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Компании, которые уже ускорили 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              time-to-market
            </span> с нами
          </h2>
          <p className="text-xl text-muted-foreground">
            Реальные результаты наших клиентов в различных сегментах MarTech
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => {
            const IconComponent = story.icon;
            const colors = getColorClasses(story.color);
            
            return (
              <Card 
                key={index}
                className="tech-card border-0 relative overflow-hidden group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.bg} group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-7 w-7 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <Badge variant="outline" className="mb-2 text-xs">
                          {story.industry}
                        </Badge>
                        <h3 className="font-semibold text-muted-foreground text-sm">
                          {story.company}
                        </h3>
                      </div>
                    </div>

                    {/* Main Result */}
                    <div className="space-y-2">
                      <div className={`text-2xl font-bold ${colors.text}`}>
                        {story.result}
                      </div>
                      <p className="text-muted-foreground">
                        {story.description}
                      </p>
                    </div>

                    {/* Details */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {story.details}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Ключевые метрики:</h4>
                      {story.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${colors.text === 'text-primary' ? 'bg-primary' : colors.text === 'text-accent' ? 'bg-accent' : 'bg-emerald-600'}`}></div>
                          <span className="text-sm text-muted-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="mt-16 text-center space-y-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold">Совокупные результаты наших клиентов</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                50+
              </div>
              <p className="text-sm text-muted-foreground">Успешных проектов</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                $15M+
              </div>
              <p className="text-sm text-muted-foreground">Сэкономлено клиентам</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                80%
              </div>
              <p className="text-sm text-muted-foreground">Сокращение TTM</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                99%
              </div>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;