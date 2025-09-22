import { Clock, DollarSign, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: Clock,
      metric: "18-24 месяца",
      title: "на разработку базового ядра",
      description: "Создание маркетинговой платформы с нуля — это долгосрочный проект, требующий глубоких знаний в области AdTech"
    },
    {
      icon: DollarSign,
      metric: "$500K-2M",
      title: "затрат на инфраструктуру и команду",
      description: "Высококвалифицированные MarTech-инженеры стоят дорого, а инфраструктура требует серьезных инвестиций"
    },
    {
      icon: Zap,
      metric: "Постоянные изменения",
      title: "API рекламных платформ",
      description: "Google Ads, Meta, TikTok постоянно обновляют API. Нужна команда для поддержки интеграций"
    },
    {
      icon: Users,
      metric: "Дефицит",
      title: "MarTech-инженеров на рынке",
      description: "Специалисты по рекламным API и данным — это редкие кадры. Найти и удержать их крайне сложно"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Создание маркетингового SaaS с нуля занимает 
            <span className="bg-gradient-to-r from-destructive to-orange-500 bg-clip-text text-transparent">
              годы и миллионы
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Пока вы разрабатываете базовую инфраструктуру, конкуренты уже захватывают рынок
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <Card 
                key={index} 
                className="tech-card border-0 p-6 text-center group cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-0 space-y-4">
                  <div className="w-16 h-16 mx-auto bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-destructive" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-destructive">
                      {point.metric}
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-2">
            Есть более быстрый способ
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;