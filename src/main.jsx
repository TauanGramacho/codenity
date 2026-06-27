import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Cable,
  CheckCircle2,
  Code2,
  Instagram,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  Send,
  Target,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";

const whatsappUrl =
  "https://wa.me/5571991488815?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20parceria%20com%20a%20CODENITY!";

const navItems = [
  ["Home", "#home"],
  ["Serviços", "#servicos"],
  ["Sobre nós", "#sobre"],
  ["Soluções", "#solucoes"],
  ["Contatos", "#contatos"],
];

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento web",
    text: "Páginas, landing pages e aplicações online com performance, identidade e foco em conversão.",
  },
  {
    icon: Cable,
    title: "APIs",
    text: "Conexões entre sistemas, integrações, automações e fluxos sob medida para sua operação.",
  },
  {
    icon: Bot,
    title: "Chatbots",
    text: "Atendimento automatizado com IA para clientes, parceiros e processos internos.",
  },
  {
    icon: BarChart3,
    title: "Análise de dados",
    text: "Dashboards, indicadores e modelos que ajudam a antecipar cenários e tomar decisões.",
  },
  {
    icon: Workflow,
    title: "Automação",
    text: "Processos mais rápidos, menos retrabalho e mais tempo para o que realmente importa.",
  },
  {
    icon: Wrench,
    title: "Suporte técnico",
    text: "Atendimento para problemas técnicos, manutenção, melhorias, sistemas, páginas, máquinas e rotinas digitais.",
  },
];

const steps = [
  ["Projetamos", "Entendemos, alinhamos e desenhamos o plano de ação."],
  ["Reportamos", "Retornamos contato a cada avanço."],
  ["Entregamos", "Documentamos cada passo e acompanhamos as integrações."],
  ["Seguimos juntos", "Evoluímos em parceria mesmo após a entrega."],
];

const solutions = [
  {
    title: "Logística",
    text: "Previsão de demanda, análise de giro, otimização de rotas, redução de custos, previsões de prazo e automação de relatórios operacionais.",
  },
  {
    title: "Financeiro",
    text: "Análise de lucratividade, controle de contas, relatórios inteligentes, inadimplência e limite de crédito.",
  },
  {
    title: "Comercial",
    text: "Previsão de vendas e crescimento, envio automatizado de propostas, segmentação de leads e análise de comportamento.",
  },
  {
    title: "Demandas técnicas",
    text: "Suporte, manutenção, configuração, orientação e soluções sob medida para qualquer rotina de tecnologia da empresa.",
  },
];

const metrics = [
  ["6", "mil acessos mensais às soluções"],
  ["4", "milhões de registros analisados"],
  ["15", "projetos ativos em empresas reais"],
];

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Codenity">
        <img src="/assets/images/logo-codenity.png" alt="" />
        <span>Codenity</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Menu principal">
        {navItems.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="https://ig.me/m/codenity.ti" target="_blank" rel="noreferrer">
        Fale conosco
        <ArrowUpRight size={18} />
      </a>
    </header>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text = [
      "Olá, gostaria de saber mais sobre a parceria com a CODENITY!",
      name && `Nome: ${name}`,
      phone && `Telefone: ${phone}`,
      message && `Assunto: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(`https://wa.me/5571991488815?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <p className="form-kicker">Contato rápido</p>
        <h3>Preencha o formulário</h3>
        <p>Nossa equipe entrará em contato.</p>
      </div>

      <label>
        Nome
        <input type="text" name="name" placeholder="Digite seu nome" required />
      </label>
      <label>
        Telefone
        <input type="tel" name="phone" placeholder="Digite seu número" required />
      </label>
      <label>
        Assunto
        <textarea name="message" rows="5" placeholder="O que gostaria de falar conosco?" />
      </label>

      <button className="button button-full" type="submit">
        <Send size={18} />
        Enviar pelo WhatsApp
      </button>

      {sent && <p className="form-status">Abrimos uma conversa no WhatsApp com a mensagem pronta.</p>}
    </form>
  );
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-slides" aria-hidden="true">
            <span className="slide slide-1" />
            <span className="slide slide-2" />
            <span className="slide slide-3" />
          </div>
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-content">
            <p className="eyebrow">Codenity solutions</p>
            <h1>Experimente sair na frente com soluções perfeitas para o seu negócio!</h1>
            <p className="hero-copy">
              Somos o time de tecnologia que ajuda sua empresa em sites, sistemas, suporte técnico, manutenção,
              automações, dados e IA.
            </p>
            <div className="hero-tags" aria-label="Áreas de atuação">
              <span>Suporte técnico</span>
              <span>Desenvolvimento</span>
              <span>Automação</span>
              <span>Dados & IA</span>
            </div>
            <div className="hero-actions">
              <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">
                Entre em contato
                <ArrowUpRight size={18} />
              </a>
              <a className="button button-ghost" href="#servicos">
                Ver serviços
              </a>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="servicos">
          <div className="section-inner">
            <p className="section-kicker">Porque nós?</p>
            <h2>Descubra, entenda e realize: mude de patamar inovando conosco!</h2>
            <p className="section-lead">Nossos serviços</p>

            <div className="service-grid">
              {services.map(({ icon: Icon, title, text }) => (
                <article className="service-card" key={title}>
                  <Icon size={34} strokeWidth={1.8} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <article className="support-banner">
              <LifeBuoy size={34} strokeWidth={1.8} />
              <div>
                <h3>Também somos seu suporte técnico de confiança.</h3>
                <p>
                  Precisa resolver algo de tecnologia e não sabe por onde começar? A Codenity atua como um time técnico
                  parceiro para organizar, configurar, corrigir, integrar e acompanhar as demandas digitais da sua empresa.
                </p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                Falar com suporte
                <ArrowUpRight size={18} />
              </a>
            </article>
          </div>
        </section>

        <section className="section process-section">
          <div className="section-inner process-layout">
            <div className="process-copy">
              <p className="section-kicker">Planejamento & solução</p>
              <h2>Estamos com você do início ao fim</h2>
              <p>Um processo claro, próximo e documentado para que cada avanço seja compreendido antes da próxima entrega.</p>
            </div>

            <div className="timeline">
              {steps.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="metrics-band" aria-label="Realizações">
          <div className="section-inner metrics-grid">
            <div className="metrics-title">
              <p className="section-kicker">Realizações</p>
              <h2>Resultados que acompanham negócios reais.</h2>
            </div>
            {metrics.map(([value, label]) => (
              <article key={label}>
                <strong>+{value}</strong>
                <p>{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="sobre">
          <div className="section-inner about-layout">
            <div className="about-copy">
              <p className="section-kicker">Sobre nós</p>
              <h2>Tecnologia sob medida para evoluir com segurança.</h2>
              <p>
                Na CODENITY, a inovação não é apenas um diferencial, é a base de tudo o que fazemos. Acreditamos que a
                tecnologia de verdade transforma, aproxima e impulsiona negócios.
              </p>
              <p>
                Desenvolvemos soluções sob medida e também apoiamos sua operação como suporte técnico, tornando a
                tecnologia acessível, inteligente e integrada à realidade do seu negócio.
              </p>
              <p>
                Oferecemos desenvolvimento web, APIs, automação, análise de dados, manutenção e chatbots com IA, sempre
                com foco em eficiência, personalização e resultado.
              </p>
            </div>

            <div className="about-visual">
              <img src="/assets/images/hero-technology.png" alt="Equipe mirando objetivos de negócio com tecnologia" />
            </div>
          </div>

          <div className="section-inner principles">
            <article>
              <Rocket size={28} />
              <h3>Missão</h3>
              <p>Entregar soluções tecnológicas inteligentes que otimizem processos e acelerem o crescimento dos clientes.</p>
            </article>
            <article>
              <Target size={28} />
              <h3>Visão</h3>
              <p>Ser referência nacional em inovação tecnológica, compromisso, excelência e parcerias duradouras.</p>
            </article>
            <article>
              <CheckCircle2 size={28} />
              <h3>Valores</h3>
              <ul>
                <li>Compromisso com o cliente</li>
                <li>Inovação constante</li>
                <li>Clareza e agilidade</li>
                <li>Parcerias sólidas</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section solutions-section" id="solucoes">
          <div className="section-inner">
            <p className="section-kicker">Soluções</p>
            <h2>Soluções para áreas que movem o seu negócio</h2>
            <div className="solutions-grid">
              {solutions.map(({ title, text }) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contatos">
          <div className="section-inner contact-layout">
            <div className="contact-copy">
              <p className="section-kicker">Quer saber mais?</p>
              <h2>Entre em contato</h2>
              <p>Conte o que você precisa construir, automatizar ou melhorar. A gente organiza o próximo passo com você.</p>

              <div className="contact-list">
                <a href="tel:+5571991488815">
                  <Phone size={20} />
                  <span>71 99148-8815</span>
                </a>
                <a href="mailto:codenity.solutions@gmail.com">
                  <Mail size={20} />
                  <span>codenity.solutions@gmail.com</span>
                </a>
                <span>
                  <MapPin size={20} />
                  Salvador - Bahia, Brasil
                </span>
              </div>

              <div className="social-row">
                <a href="https://www.instagram.com/codenity.ti/" target="_blank" rel="noreferrer">
                  <Instagram size={18} />
                  Instagram
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  Whatsapp
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <img src="/assets/images/logo-codenity.png" alt="" />
            <p>Transformando ideias em soluções</p>
          </div>
          <nav aria-label="Institucional">
            <h2>Institucional</h2>
            {navItems.map(([label, href]) => (
              <a href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <nav aria-label="Contatos">
            <h2>Contatos</h2>
            <a href="https://www.instagram.com/codenity.ti/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="mailto:codenity.solutions@gmail.com">Email</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Whatsapp
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>Codenity Solutions Copyright {year} - Todos os Direitos Reservados</p>
          <a href="/politica-de-privacidade.html">Políticas de privacidade</a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
