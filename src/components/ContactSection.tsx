import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Video, Users, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка отправлена!",
      description: "Наш специалист свяжется с вами в течение 24 часов",
    });
    
    setIsSubmitting(false);
  };

  const alternativeActions = [
    {
      icon: Download,
      title: "Скачать White Paper",
      description: "Техническое описание архитектуры и возможностей платформы",
      action: "Скачать PDF"
    },
    {
      icon: Video,
      title: "Посмотреть запись вебинара",
      description: "45-минутная демонстрация ключевых возможностей",
      action: "Смотреть видео"
    },
    {
      icon: Users,
      title: "Техническая консультация",
      description: "Персональная сессия с нашими архитекторами",
      action: "Записаться"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Готовы ускорить запуск вашего 
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MarTech SaaS?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Заполните форму и получите персональную демонстрацию платформы в течение 24 часов
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="tech-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Запросить демо</CardTitle>
                <p className="text-muted-foreground">
                  Расскажите о вашем проекте, и мы подготовим персональную демонстрацию
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input id="firstName" placeholder="Ваше имя" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input id="lastName" placeholder="Ваша фамилия" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Компания *</Label>
                    <Input id="company" placeholder="Название компании" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Тип проекта *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип проекта" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="startup">MarTech стартап</SelectItem>
                        <SelectItem value="agency">Рекламное агентство</SelectItem>
                        <SelectItem value="enterprise">Enterprise-решение</SelectItem>
                        <SelectItem value="integrator">Системная интеграция</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Планируемые сроки запуска</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Когда планируете запуск?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">Как можно скорее</SelectItem>
                        <SelectItem value="1-3months">1-3 месяца</SelectItem>
                        <SelectItem value="3-6months">3-6 месяцев</SelectItem>
                        <SelectItem value="6months+">Более 6 месяцев</SelectItem>
                        <SelectItem value="research">Пока изучаем рынок</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Расскажите о проекте</Label>
                    <Textarea 
                      id="description"
                      placeholder="Опишите ваши задачи, целевую аудиторию, планируемый функционал..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="xl" 
                    className="w-full group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправляем..." : "Запросить демо"}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Alternative Actions */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold mb-2">Альтернативные действия</h3>
              <p className="text-muted-foreground text-sm">
                Получите больше информации о платформе
              </p>
            </div>

            {alternativeActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Card 
                  key={index} 
                  className="tech-card border-0 cursor-pointer group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold mb-1">{action.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {action.description}
                        </p>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                          {action.action} →
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Contact Info */}
            <Card className="tech-card border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">Нужна помощь?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Свяжитесь с нами напрямую
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email:</span>
                    <br />
                    <a href="mailto:sec@promospace.hk" className="text-primary hover:underline">
                      sec@promospace.hk
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;