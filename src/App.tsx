import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>MarTech Core - Лицензируемое ядро для маркетинговых SaaS | Запуск в 3-5 раз быстрее</title>
        <meta name="description" content="Готовая платформа с 40+ коннекторами к рекламным сетям, enterprise-безопасностью и полным стеком для создания собственного MarTech-продукта. Запуск MVP за 3-6 недель." />
        <meta name="keywords" content="MarTech, SaaS, API коннекторы, Google Ads, Meta Ads, рекламные платформы, enterprise, лицензирование" />
        <meta name="author" content="Promo Space Limited" />
        <link rel="canonical" href="https://martechcore.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="MarTech Core - Лицензируемое ядро для маркетинговых SaaS" />
        <meta property="og:description" content="Запуск маркетингового SaaS в 3-5 раз быстрее с готовой платформой и 40+ коннекторами" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martechcore.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MarTech Core - Запуск маркетингового SaaS за недели, а не месяцы" />
        <meta name="twitter:description" content="40+ коннекторов, enterprise-безопасность, полный стек для MarTech SaaS" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
