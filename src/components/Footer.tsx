import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Продукт",
      links: [
        { name: "Техническая документация", href: "#" },
        { name: "API Reference", href: "#" },
        { name: "Интеграции", href: "#" },
        { name: "Безопасность", href: "#" }
      ]
    },
    {
      title: "Ресурсы",
      links: [
        { name: "White Papers", href: "#" },
        { name: "Кейсы клиентов", href: "#" },
        { name: "Вебинары", href: "#" },
        { name: "Блог", href: "#" }
      ]
    },
    {
      title: "Поддержка",
      links: [
        { name: "Центр помощи", href: "#" },
        { name: "Контакты", href: "#" },
        { name: "Партнерская программа", href: "#" },
        { name: "SLA", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                MarTech Core
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Лицензируемое ядро для быстрого запуска маркетинговых SaaS-продуктов 
                с enterprise-готовностью и масштабируемостью.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:sec@promospace.hk" className="hover:text-primary transition-colors">
                  sec@promospace.hk
                </a>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>
                  Promo Space Limited<br />
                  Hong Kong
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Promo Space Limited. Все права защищены.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Русский
            </Button>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Все системы работают</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;